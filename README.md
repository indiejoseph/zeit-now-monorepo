# Deploy monorepo with ZEIT Now

[https://zeit-now-monorepo.indiejoseph.now.sh/](https://zeit-now-monorepo.indiejoseph.now.sh/)

Experimental of monorepo package management based on NPM file specifier and deployment with ZEIT Now.

## Motivations

- The official ZEIT Now's monorepo example doesn't introduce how to internal package
- Lerna or NPM symlink are not ZEIT Now friendly
- I don't like Lerna, it's randomly deleted my packages 😥... [https://github.com/lerna/lerna/issues/951](https://github.com/lerna/lerna/issues/951)
- Someone has a solution to come over private registries problem which packing local packages up with `npm pack` and then deploy to ZEIT Now as a static file `https://my-package-abc123.now.sh` and update the corresponding registries in package.json, but this approach is very hacky and tedious.

## Pros

- 😎No dependency, only NPM

## Cons

- 🔨Lack of all basic functionalities of monorepo management like package version control, publish and hoist, but of course you can definitely use Lerna to tackle
