<# 
Script for connecting to Jupyter Server API
see docs here: https://jupyter-server.readthedocs.io/en/latest/developers/rest-api.html
#>


##--------------------------- Get the hostname from the parameter
$spt = $args[0].Split('/?token=')
$hostport = $spt[0]
$token = $spt[1]

#--------------------------- Get a the list of active kernels 
$get_res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method GET -Headers $headers 
$kernel_list = $get_res | ConvertFrom-Json
Write-Host $kernel_list

#---------------------------- Create a new kernel
# $KernelSpecName = "python3"
# $KernelPath = ""
# $headers = @{
#     "Content-Type" = "application/json"
#     "Authorization" = "token $token"
# }
# $Body = ConvertTo-Json @{
#     name = $KernelSpecName
#     path = $KernelPath
# }
# $post_res = Invoke-WebRequest -Uri "$hostport/api/kernels" -Method Post -Body $Body -Headers $headers 
# $jsonResponse = $post_res | ConvertFrom-Json
# Write-Host $jsonResponse.id 

##----------------------------  Delete each kernel in $kernel_list
# foreach ($kernel in $kernel_list) {
#     $kernel_id = $kernel.id
#     $Payload = ConvertTo-Json @{
#         kernel_id = $kernel_id
#     }
#     Invoke-WebRequest -Uri "$hostport/api/kernels/$kernel_id" -Method DELETE -Body $Payload -Headers $headers 
# }


##---------------------------- CRSF token stuff
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