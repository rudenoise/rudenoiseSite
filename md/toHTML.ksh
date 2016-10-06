#! /bin/ksh

# print the header up to the title
cat md/htmlSnips/a.html;
# make the title from the title of the post
TITLE=$(head -n 1 $1);
# put the body text in a tmp file for later
tail -n +2 $1 > /tmp/article.md;
DATE_NOW=$(date -u +"%Y-%m-%d");
# trim off the "# " from the title
echo ${TITLE#\#\ };
# print the head to the body
cat md/htmlSnips/b.html;
echo ${TITLE#\#\ };
cat md/htmlSnips/b2.html
echo $DATE_NOW;
cat md/htmlSnips/b4.html
# convert the markdown to html
pandoc -f markdown -t html /tmp/article.md
# print the footer
cat md/htmlSnips/c.html;
