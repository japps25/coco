# get the hostname from the parameter
$spt = $args[0].Split('/?token=')
$hostport = $spt[0]
$token = $spt[1]

# Get the command line arguments
$command = $args[1]

# Make a GET request to retrieve the CSRF token
$res = Invoke-WebRequest -Uri "$hostport/?token=$token" -SessionVariable $session

# Extract the CSRF token from the Set-Cookie header
$cookieHeader = $res.Headers["Set-Cookie"]
$csrfToken = $cookieHeader.Where({ $_ -match "_xsrf" }).Split('=')[1].Split(';')[0]
# Write-Output $csrfToken

# Include the CSRF token in the header of the POST request
$headers = @{
    "Content-Type"  = "application/json"
    "Connection"    = "keep-alive"
    "X-Xsrftoken"   = "_xsrf=$csrfToken"
    "Authorization" = "token $token"
}

if ($command -eq "api") {
    $res = Invoke-WebRequest -Uri "$hostport/api" -Method Get -Headers $headers -WebSession $session
    $list = $res.Content | ConvertFrom-Json
    Write-Output $list
    return
}

if ($command -eq "lk" || $command -eq "listkernels") {
    $res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Get -Headers $headers -WebSession $session
    $list = $res.Content | ConvertFrom-Json
    Write-Output $list
    return
}

if ($command -eq "nk" || $command -eq "newkernel") {
    $jsonPayload = @{
        "name" = "python3"
        "path" = ""
    } | ConvertTo-Json

    try {
        $res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Post -Body $jsonPayload -Headers $headers -WebSession $session 
        $kernel_id = ($res.Content | ConvertFrom-Json).id
        Write-Output "Kernel id=$kernel_id"
    }
    catch {
        $message = $_.Exception.Message
        Write-Output "Error occurred: $message"
    }
    return
}

