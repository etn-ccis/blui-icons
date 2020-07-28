# Power Xpert Blue Icons

This repository contains icon files for Power Xpert Blue. These icons are grouped into 'family' folders of related icons. Family folders follow a similar naming convention to Material Design, e.g., **Status** and **Devices**. Each icon should be available as a clean, minified SVG file. You may optionally include a source (AI) file for the icon as well - it may be beneficial to group families of icons into a single AI file.

## Icon Approval

All icons created for PX Blue must go through the Pull Request process and be approved by the PX Blue team before they will be merged into the master branch and released in the PX Blue icon packages. 

If you are comfortable using GitHub and the command line on your computer, you can follow the instructions below for creating your own Pull Request. 

> If you're not familiar with GitHub and/or the command line, you can also send us your icons directly via email and we will create the Pull Request for you and relay any feedback.

Before acceptance, new icons must be reviewed by:
- A Senior PX Blue designer to ensure that the icons are properly following Material Design guidelines
- A PX Blue developer to ensure that the SVG files are properly formatted and function correctly with the build pipeline

Reviewers must also agree that the name of the icon makes sense, avoids collisions, and that the icon fits into the proposed family folder.

## Icon Creation

When creating icons, follow the Material Design [icon design guidelines](https://material.io/design/iconography/system-icons.html) (we only use 24dp icons, not 20dp). Icon designs that do not adhere to these guidelines will be rejected. Templates are available to assist you:
-   Illustrator: [IconTemplate.ait](https://github.com/pxblue/icons/raw/dev/design/IconTemplate.ait)
-   Printable: [MDILetter.pdf](https://github.com/pxblue/icons/raw/dev/design/MDILetter.pdf), [MDITabloid.pdf](https://github.com/pxblue/icons/raw/dev/design/MDITabloid.pdf)

Design files should ideally contain both original paths, strokes, text, etc. (in the case that the icon must be modified to increase stroke width or font size, for example) as well as the expanded paths version. The expanded version should be use to generate the SVG file.

### SVG Export Guidelines
From Adobe Illustrator go to _File -> Export -> Export As_ and select SVG from the file type dropdown. Each icon should be exported as a separate file. 

Select the following options from the export dialog:
-   Styling: Presentation Attributes
-   Font: SVG or Expanded
-   Images: Preserve
-   Object IDs: Minimal
-   Decimal: 2
-   Minified
-   Not Responsive (should include width and height and viewbox definitions).
-   Be sure to include a 24x24px rectangle with no stroke and no fill to serve as the bounding box.
-   Strokes and type should be expanded to paths.
-   Icon shape should have no fill defined.

## Naming Conventions

Icon SVGs should follow the naming convention of just using an icon name (e.g. `device`). If the name of an icon has more than one word, the name must have an underscore between each word (e.g. `battery_full`). Do not use dashes. Do not use prefixes or suffixes - these will be automatically applied as part of the build process.


## Git Steps for Designers
The following instructions are for individuals who are comfortable working with GitHub and the command line on their computer. If you prefer, you can send new icons directly to the PX Blue team via email and we will take care of this part of the process for you.

In order to work with this GitHub repository, you will need to have a GitHub account (if you don't have one, you can [sign up](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) for free).

For outside contributors, please refer to our [Contribution Guidelines](https://github.com/pxblue/.github/blob/master/CONTRIBUTING.md#get-started). To summarize the steps for adding your icons and creating a Pull Request for approval:
- Fork the icons repository to your account
    - Go to https://github.com/pxblue/icons and click the Fork button in the top right of the screen (outside contributors who have been added to the icons repository can clone directly from the PX Blue repository without forking)
- Clone the repository to your local computer
    ```
    git clone https://github.com/<your-user-id>/icons
    cd icons
    git remote add upstream https://github.com/pxblue/icons
    git pull upstream dev
    ```
-   Create a new Branch for your changes. The name of the branch should start with `feature/` followed by the name of your icon (or a simple summary if you are including multiple icons), e.g., `feature/ups`. If your icon name is multiple words, you must separate them with a dash.
    ```
    git checkout -b feature/icon
    ```
- Make your changes in the design folder of your local copy of the repository
    - Don't forget to update the `META.json` file with an entry for your new icons - follow the format used for the existing icons.
- Commit and push your changes. You must include a descriptive commit message. It should include any relevant information about the specific changes/additions you have made.
    ```
    git add -A
    git commit -m "Your commit message here"
    git push -u origin <your branch name>
    ```  
-   Create a Pull Request to begun the process of reviewing and publishing your changes.
    - Go to https://github.com/pxblue/icons
    - Click on the Pull Requests tab in the upper left
    - Click on the green "New Pull Request" button
        - In the 'base' dropdown, select 'dev'
        - In the 'head' dropdown, select your branch from your forked repository
        - Click on the Create Pull Request button
        - Fill out the Pull Request template with information about your submission and click the Create button
- Reviewers will either accept or reject your Pull Request.
    -   If approved, the reviewers will merge your changes and they will be available in the next icons package release
    -   If your Pull Request is not approved, reviewers will leave comments indicating what needs to change in order to pass the review.
        - If you need to make change, you can continue to work from your local copy of the repository. Once you have made updates, commit and push your changes (see the instructions above). Your Pull Request will automatically be updated to include your latest changes.
