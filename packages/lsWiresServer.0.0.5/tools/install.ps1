param($installPath, $toolsPath, $package, $project)

# Need to find the name of our HTML Client
$clientProject = $dte.Solution.Projects | Where-Object { ($_.FileName).contains(".jsproj")} | Select -First 1
$clientName = $clientProject.Name.split('.')[1]

# Only need to update 1 server file with custom info
$refreshInfo = "0; url=/$clientName"

# Go get our file to update
$projectPath = split-path $project.FullName
$fileName = "$projectPath\default.htm"

if (Test-Path $fileName) {

    # Set the meta refresh to the root client
    [xml]$xmlContents = Get-Content -Path $fileName
    $xmlContents.GetElementsByTagName("meta").setAttribute("content", $refreshInfo) 
    $xmlContents.Save($fileName)

}