#file in ocim
clear
echo "=================================================="
echo "Enter the description for commit : \c"
read commit
date=`date`
echo "=================================================="
comment=`echo "Description 	: $commit \n==================================================\nDate and Time 	: $date"`
echo "$comment"
echo "=================================================="
git add .
git status
git commit -m "$comment"
git push
echo "=================================================="
echo "                    All Done !"
echo "=================================================="

