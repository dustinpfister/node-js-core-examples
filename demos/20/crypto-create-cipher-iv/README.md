# crypro-create-cipher-iv

I would like to make at least one if not more node v20 friendly scripts for the create-cipher-iv method of the crypto module. Just a basic tool that will spit things out to the standard output.

## The coder.js file

For the coder.js file I just wanted a simple script that I can use to cipher or decipher some text that I give to the script by way of standard input. This way I can use any linux command as a way to create the content to enctypt or to provide content to decrypt. For example when it comes to just working this out in the command line alone without creating any kind of file I count use the echo bash built in command.

```bash
$ echo -n "this is what I want to encode" | node coder.js "password" "salt" "AES-256-CBC" "cipher" "y"
904a555508b44e92b039986b59b1ad427ff3e52ebbf6a9e28fe923444898488a
$ echo -n "904a555508b44e92b039986b59b1ad427ff3e52ebbf6a9e28fe923444898488a" | node coder.js "password" "salt" "AES-256-CBC" "decipher" "y"
this is what I want to encode
```

I can then also use any
