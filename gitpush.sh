#file in ocim
clear
echo "Enter the description for commit : \c"
read commit
date=`date`
echo "\n=================================================="
comment=`echo "Description 	: $commit \n==================================================\nDate and Time 	: $date"`
echo "$comment"
echo "\n=================================================="
git add .
git status
git commit -m "$comment"
git push
echo "\n=================================================="
echo "                    All Done !"
echo "\n=================================================="

