# get the hostname from the parameter
$spt = $args[0].Split('/?token=')
$hostport = $spt[0]
$token = $spt[1]

# Make a GET request to retrieve the CSRF token
#$res = Invoke-WebRequest -Uri "$hostport/?token=$token" -SessionVariable session

# Extract the CSRF token from the Set-Cookie header
#$cookieHeader = $res.Headers["Set-Cookie"]
#$csrfToken = ($cookieHeader -split ';')[0].Split('=')[1]

# Include the CSRF token in the header of the POST request
<# $headers = @{
    "Content-Type" = "application/json"
    "Connection"   = "keep-alive"
    "Cookie"       = "_xsrf=$csrfToken"
    "X-XSRFToken"  = $csrfToken
} #>

$KernelSpecName = "python3"
$KernelPath = ""
$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "token $token"
}
$Body = ConvertTo-Json @{
    name = $KernelSpecName
    path = $KernelPath
}

$res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Post -Body $Body -Headers $headers 
# $res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Get -Headers $headers -WebSession $session

# $res.Content | ConvertFrom-Json
$res