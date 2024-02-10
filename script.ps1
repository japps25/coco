<# 
Script for connecting to Jupyter Server API
see docs here: https://jupyter-server.readthedocs.io/en/latest/developers/rest-api.html
#>


##--------------------------- Get the hostname from the parameter

$spt = $args[0].Split('/?token=')
$hostport = $spt[0]
$token = $spt[1]

$Env:AUTHTOKEN = $token

# Write the environment variable to a .env file

echo "`$Env:AUTHTOKEN='$token'" >> './env.ps1'

$filePath = "./env.ps1"

# Check if the file is empty
if ((Get-Content $filePath -Raw) -eq $null) {
    Write-Host "The file is empty."
} else {
    Clear-Content -Path $filePath
    echo "`$Env:AUTHTOKEN='$token'" >> $filePath
}


#Make a GET request to retrieve the CSRF token
#$res = Invoke-WebRequest -Uri "$hostport/?token=$token" -SessionVariable session

#Extract the CSRF token from the Set-Cookie header
#$cookieHeader = $res.Headers["Set-Cookie"]
#$csrfToken = ($cookieHeader -split ';')[0].Split('=')[1]

# Include the CSRF token in the header of the POST request
# $headers = @{
#     "Authorization" = $token
#     "Content-Type"  = "application/json"
#     "Cookie"       = "_xsrf=$csrfToken; Path=/; HttpOnly"
#     "X-XSRFToken"  = $csrfToken
# }

# Include the CSRF token in the header of the POST request
# $headers = @{
#     "Content-Type" = "application/json"
#     "Connection"   = "keep-alive"
#     "Cookie"       = "_xsrf=$csrfToken"
#     "X-XSRFToken"  = $csrfToken
# } 


# #---------------------------- Create a new kernel
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
try {
    $post_res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Post -Body $Body -Headers $headers 
    $jsonResponse = $post_res | ConvertFrom-Json
    $kernelID = $jsonResponse.id 
    #Write-Host $kernelID
    echo "`$Env:kernelID='$kernelID'" >> $filePath
} catch {
    Write-Host $_.Exception.Message
}
        
#--------------------------- Get a the list of active kernels 
$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "token $token"
    } 

try {
    $get_res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method GET -Headers $headers 
    $kernel_list = $get_res | ConvertFrom-Json
    Write-Host $kernel_list
} catch {
        Write-Host $_.Exception.Message
    }


     
        
#----------------------------  Delete each kernel in $kernel_list
# foreach ($kernel in $kernel_list) {
#     $kernel_id = $kernel.id
#     $Payload = ConvertTo-Json @{
#         kernel_id = $kernel_id
# }
# Invoke-WebRequest -Uri "$hostport/api/kernels/$kernel_id" -Method DELETE -Body $Payload -Headers $headers 
# }


