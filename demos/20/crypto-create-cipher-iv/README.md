# crypro-create-cipher-iv

I would like to make at least one if not more node v20 friendly scripts for the create-cipher-iv method of the crypto module. Just a basic tool that will spit things out to the standard output.

## The coder.js file

```bash
$ echo -n "this is what I want to encode" | node coder.js "password" "salt" "AES-256-CBC" "cipher"
904a555508b44e92b039986b59b1ad427ff3e52ebbf6a9e28fe923444898488a
```

```bash
$ echo -n "904a555508b44e92b039986b59b1ad427ff3e52ebbf6a9e28fe923444898488a" | node coder.js "password" "salt" "AES-256-CBC" "decipher"
this is what I want to encode
```
