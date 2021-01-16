# Password Generator
## Description
Horiseon, a marketing agency, wants a codebase that follows accessibility standards so their website is optimized for search engines. They have requested we refactor their code to ensure accessibility and clarify and simply their existing code base. 

## Problems
1. The client's codebase does not use semantic HTML elements, so the organization of the site is not immediatley apparent when reviewing its index.html file. 
2. The elements represented in the corresponding stylesheet do not progress in the same order as they are presented in the index.html file. 
3. Images within the index.html file do not include alt text attributes.
4. One link within the existing site is not active.
5. The site lacks a descriptive title.

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

3. Whenever possible, element selectors within the style.css file were consolidated to produce a more concise stylesheet.

**Example of CSS element selectors before code refactor:** 

    .search-engine-optimization h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    .online-reputation-management h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    .social-media-marketing h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

**Example of consolidated CSS element selector after code refactor:**

    .content h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

4. Alt text was added for each image referenced within the index.html file. 

5. The non-functioning navigation link was repaired by adding an ID to the article it referenced. 

6. A page title, listing the Horiseon Homepage, was added to the index.html file. 

7. Comments were added to both the index.html and style.css files to help future developers better understand the structure of the files and how the elements referenced within each are used.

## Location
Use the following link to access the company's refactored website: [Horiseon Homepage](https://larrygjenkins.github.io/HoriseonRefactor/)

## Example Images
Following is an image of the password generator before a new password is created:

![Horiseon Homepage](images/PasswordGeneratorBeforeImage.png)
<img src="images/PasswordGeneratorBeforeImage.png" alt="Password Generator site before new password created">

Following is an image of the password generator after a new password is created:

![Horiseon Homepage](images/PasswordGeneratorAfterImage.png)
