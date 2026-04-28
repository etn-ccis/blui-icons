# Contributing to Brightlayer UI

## Our Contribution Model

Brightlayer UI is an **open source** design system by Eaton. We welcome contributions from the community and appreciate your interest in helping improve the project. If you're curious about our contribution process, you're in the right place!

This project is made possible not just by the core Brightlayer UI team, but by contributors who've generously given their time to help.

We follow an **innersourcing** model to encourage collaboration across teams within Eaton. Learn more about our innersourcing approach [here](https://brightlayer-ui.github.io/community/innersourcing).

## Code of Conduct

[Code of Conduct](./CODE_OF_CONDUCT.md)

## Prerequisites

Before contributing, ensure you have these tools installed:

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
  - On macOS, we recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.
- [Git](https://github.com/git-guides/install-git)
- [Yarn](https://yarnpkg.com/getting-started)

You'll also need a code editor. [VS Code](https://code.visualstudio.com/) is recommended.

Once these tools are installed, you're ready to contribute!

## Start Contributing

### Setting Up Your Environment

#### Fork the Repository

[Forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)

#### Clone Your Fork

[Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)

#### Add Upstream Remote

After cloning your fork, set up the upstream remote:

\`\`\`sh
# Add the upstream remote to your repo
git remote add upstream git@github.com:etn-ccis/blui-icons.git

# Verify the remote was added
git remote -v
\`\`\`

Expected output:

\`\`\`sh
origin  git@github.com:<your_github_username>/blui-icons.git (fetch)
origin  git@github.com:<your_github_username>/blui-icons.git (push)
upstream  git@github.com:etn-ccis/blui-icons.git (fetch)
upstream  git@github.com:etn-ccis/blui-icons.git (push)
\`\`\`

Great job on getting to this point! Now it's time to code :computer:

### Making a Contribution

#### Find or Create an Issue

Check the [issues list](https://github.com/etn-ccis/blui-icons/issues) for anything you'd like to work on. If something exists, comment to claim it.

No issue yet? [Create one](https://github.com/etn-ccis/blui-icons/issues/new/choose). Issues help us track work and streamline the contribution process.

#### Create a Working Branch

Before making any changes, create a branch from `dev` to keep your work organized and separate from the main codebase. This makes it easier to manage your changes and submit them as a pull request (PR) later.

\`\`\`sh
git pull origin dev
git checkout -b feature/<your_branch_name>
\`\`\`

#### Build and Start the Development Server

From the root directory, run the following commands:

\`\`\`sh
# Install the project's dependencies
yarn install

# Start the development server
yarn start
\`\`\`

Once the development server is running, you can edit the source code. The system automatically bundles your changes and reloads the browser.

#### Test

If you're working on JavaScript or TypeScript code, test your changes by running:

\`\`\`sh
yarn test
\`\`\`

#### Create a Pull Request

When you're ready to submit your changes for review, commit and push your branch. Use a descriptive commit message following this convention:

\`\`\`
type(scope): description
\`\`\`

For example: `fix(docs): correct typo in overview page`

Then, create a PR to the main Brightlayer UI repo by following GitHub's [guide to creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

See [How to write the perfect pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) for tips on writing a good PR description.

#### Update a Pull Request

Stay up to date with activity in your PR. Maintainers will review your work, make comments, ask questions, and suggest changes. This process is collaborative and may take a few iterations.

When you need to make a change, make additional commits on your branch. Once you push those changes to your fork on GitHub, the PR will automatically update with your new commits.

Reviewers will check that CI is passing. If you encounter any issues, check the CI logs for details. If you need help, ask.

Once the changes are complete and your PR is approved, a maintainer will merge your changes.

## FAQ

### Who can contribute?

Anyone! The only requirement is a public GitHub account as all our assets live on GitHub. Sign up on https://github.com.

- **Development:** Contribute bug fixes, new features, or improvements to existing components.
- **Design:** Contribute visual assets, UX interactions, and design resources.
- **Documentation:** Help improve or expand our documentation and guides.

### How else can I contribute?

You can contribute without directly creating or maintaining code:

- **Report bugs:** Even if you can't submit a fix, opening a well-documented issue makes a big difference.
- **Suggest enhancements:** Share ideas for improving Brightlayer UI by opening a feature request issue.
- **Improve documentation:** Fix typos, clarify instructions, or add examples.

### Can you assign me to the issue I want to work on?

We only assign team members and core maintainers. To claim an issue, add a comment stating you're going to work on it. If you haven't created a PR for that issue within two weeks, it's considered fair game for someone else to pick up.