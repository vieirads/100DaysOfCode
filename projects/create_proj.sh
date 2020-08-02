# second argument of the command line is the folder name with path
FOLDER_NAME="$1"

# check to see if the folder name was provided
if [ "$#" -ne 1 ]; then
    echo "-----------------------"
    echo -e "USAGE:\n"
    echo -e "\t $ $0 FOLDER_NAME\n"
    echo -e "Where 'FOLDER_NAME' the path where the basic files are going to be created."
    echo "-----------------------"
    exit 1
fi

# create the directory
mkdir "$FOLDER_NAME"
# change the directory
cd "$FOLDER_NAME"

# create the html with basic structure
echo "<!DOCTYPE html>
<html>

<head>
    <title></title>
    <link rel=\"stylesheet\" href=\"style.css\">
</head>

<body>


<script src=\"script.js\"></script>
</body>
</html>
" > index.html

# create empty CSS and JS files
# touch style.css
# touch script.js
echo '' > style.css
echo '' > script.js

echo "<h1></h1>

<hr>

<h2>About the project</h2>

<p>

</p>" > README.md

# messages after all files were created
echo -e "\n--------------------------------------\n"
echo -e "#\t index.html created. \t#"
echo -e "#\t style.css  created. \t#"
echo -e "#\t script.js  created. \t#"
echo -e "#\t README.md  created. \t#"
echo -e "\n--------------------------------------\n"
echo -e "\t GOOD LUCK! :)\n"