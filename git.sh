#file in ocim
clear
echo "1) Push to GitHub"
echo "2) Fetch From GitHub"
echo "Enter the Choice: \c"
read choice
case "$choice" in
1) sh gitpush.sh;;
2) sh gitpull.sh;;
*) echo "Invalid Choice :("
esac

