#! /bin/bash

# print the header up to the title
cat md/a.html;
# make the title from the title of the post
TITLE=$(head -n 1 $1);
# trim off the "# " from the title
echo ${TITLE:2};
# print the head to the body
cat md/b.html;
# convert the markdown to html
pandoc -f markdown -t html $1;
# print the footer
cat md/c.html;
