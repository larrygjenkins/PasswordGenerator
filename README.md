# Password Generator
## Description
The goal of this project was to create a random password generator. The length and format of the password would be dependent upon user input.

The index.html and style.css files were provided for this project. A portion of starter code for the script.jss file was also provided. 

## Acceptance Criteria
1. Users have a button that intitates the creation of a new, random password.
2. The application will prompt the user for the necessary length of their password.
3. Password must be between 8 and 128 characters. 
4. Users may choose an option of password characteristics, including lowercase letters, uppercase letters, numbers, and special characters.
5. Once all selections have been made, the application displays the user's new password. 

## Solution
1. Non-semantic elements, like div tags, within the index.html and style.css files were replaced with more descriptive elements, like main, aside, section, and article. This allows future developers to more quickly discern the organization of a page from the HTML syntax. 

**Example of HTML tags before code refactor:** 

    <div class="content">
            <div class="search-engine-optimization">
                <img src="./assets/images/search-engine-optimization.jpg" class="float-left" />
                <h2>Search Engine Optimization</h2>
                <p>
                    The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
                </p>
            </div>

**Example of HTML tags after code refactor:** 


        <section class="content">
            <article id="search-engine-optimization" class="search-engine-optimization">
                <img src="./assets/images/search-engine-optimization.jpg" class="float-left" alt="A photo of a laptop, a cup of coffee, colored pencils, and a notebook with SEO ideas." />
                <h2>Search Engine Optimization</h2>
                <p>
                    The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
                </p>
            </article>

2. The style.css file was reorganized so the elements presented there follow the same organizational flow of the index.html file. 

## Location
Use the following link to access the repository associated with this project: [Password Generator Repository](https://github.com/larrygjenkins/PasswordGenerator.git)

Use the following link to access the Password Generator application: [Password Generator Application](https://larrygjenkins.github.io/PasswordGenerator/)

## Example Images
Following is an image of the password generator before a new password is created:

![Password Generator application before new password created](images/PasswordGeneratorBeforeImage.png)
<img src="images/PasswordGeneratorBeforeImage.png" alt="Password Generator application before new password created">

Following is an image of the password generator after a new password is created:

![Password Generator application after new password created](images/PasswordGeneratorAfterImage.png)
