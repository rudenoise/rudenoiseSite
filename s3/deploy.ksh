#! /bin/ksh
# empty the bucket
aws --profile rudenoise s3 rm s3://rudenoise.uk --recursive;
# upload the content to the bucket
aws --profile rudenoise s3 \
    sync ./ s3://rudenoise.uk/ \
    --exclude ".git/*" \
    --exclude ".git*" \
    --exclude "s3/*" \
    --exclude "md/*" \
    --exclude="README.md" \
    --cache-control max-age=30 \
    --acl public-read;
