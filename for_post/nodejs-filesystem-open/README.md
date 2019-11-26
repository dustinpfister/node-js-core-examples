## nodejs-filesystem-open

Working out some demos for my post on fs.open

## wrapper

Trying to work out some system where a standard object is pass along with an fd, and file size

## write_plus

Trying to get the w+ flag mode for fs.open to work as expected with fs.write. However the fs.write method keeps overwriting data with null values each time. I Have found that I just have to use the f+ mode, and just handle the error that will happen when a file is not there.