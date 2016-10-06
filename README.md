# Rudenoise Website

This is the source for the [Rudenoise](http://rudenoise.uk/) web-site.

## Deploy to AWS S3

```sh
# fetch
./s3/fetch
# deploy
./s3/deploy
```

## Write a post

Create a markdown file in ```./md```

Turn it into an HTML page with:
```
./md/toHTML[.bash|.ksh] md/{fileName.md} > {fileName.html}
```

## Stuff

[ASCII Sheep](http://rudenoise.uk/sheep)
