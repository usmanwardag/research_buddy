 # Research Buddy 

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/usmanwardag/research_buddy)

[![Build Status](https://app.travis-ci.com/usmanwardag/research_buddy.svg?branch=main)](https://app.travis-ci.com/usmanwardag/research_buddy)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5542634.svg)](https://doi.org/10.5281/zenodo.5542634)

[![GitHub license](https://img.shields.io/github/license/usmanwardag/research_buddy)](https://github.com/usmanwardag/research_buddy/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/usmanwardag/research_buddy)](https://github.com/usmanwardag/research_buddy/issues)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/usmanwardag/research_buddy)](https://github.com/usmanwardag/research_buddy/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub stars](https://img.shields.io/github/stars/usmanwardag/research_buddy)](https://github.com/usmanwardag/research_buddy/stargazers)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#why-should-you-use-research-buddy">Why should you use Research Buddy?</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#code-documentation">Code Documentation</a></li>
    <li><a href="#how-to-contribute">How to Contribute</a></li>
    <li><a href="#future-roadmap">Future RoadMap</a></li>
   <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## Why should you use Research Buddy?

- You find a lot of technical jargon on the web you don't understand. 
- When you read a word or a phrase, you want to get full context around it.
- You want to know about the state of the art research in a given field.
- You want to quickly search words you read on different platforms. 
- You often find reading research articles frustrating.

![Alt Text](https://media.giphy.com/media/oirLISmToyoeI/giphy.gif?cid=ecf05e47dlrdgathxxv740g1jekiz6zdq9ycppxzdd4dyvo0&rid=giphy.gif&ct=g)

Research Buddy is here to make your life simple :)

Double clicking on any text will give you a popup displaying the definition picked up from Wikipedia, the top papers in the field, and youtube, google scholar, and github links. You can highlight any term, and this tool will provide you the Wikipedia definition with a link to the page, and links pointing to the top 5 related papers as well as the search results from Youtube, Github, Udemy, Google Scholar and Coursera. You get everything in a nice organized popup!

[Check out the video!](https://www.youtube.com/watch?v=kn4dpa2_HnQ)

[![Research Buddy](https://github.com/usmanwardag/research_buddy/blob/main/Image1.jpeg)](https://www.youtube.com/watch?v=kn4dpa2_HnQ)

## Installation

 - Clone the repository: 
 
 ` git clone https://github.com/usmanwardag/research_buddy`
 
 - Change directory to `src`
 
 `cd src`
 
 - Go to `chrome://extensions/`
 - Turn on your developer mode
 - Click on Load Unpacked and select `src` directory
 - You should be able to see our extension loaded in Google Chrome!

## Code Documentation

We generated the documentation of our code using [jsdoc](https://jsdoc.app/). You can find our code documentaion for each method implemented [here](https://github.com/usmanwardag/research_buddy/blob/main/out/index.html).

## How to Contribute
  
We would be happy to receive contributions! If you'd like to, please go through our [CONTRIBUTING.md](https://github.com/usmanwardag/research_buddy/blob/main/CONTRIBUTING.md). 

For any feedback, issues, or bug reports, please create an issue [here](https://github.com/usmanwardag/research_buddy/issues/new).
 
 ## Future RoadMap
There are many interesting possibilities to extend this tool:

**Implement on PDFs:** Currently, the functionality is limited to web pages. It would be very useful if the chrome extension can also be run on online PDF pages.

**Improve Paper Search:** Currently, the papers are extracted using [cross-ref](https://www.crossref.org/) API. However, in our experience it does not always return the most relevant papers. A better way would be to extract most relevant and cited papers from Google Scholar so that the user can immediately what the state of the art of a given field is.

**User Customization:** Take input from users and allow them to customize how the popup looks. For example, they can specify what kind of results should be showed in the popup. Or, how many relevant papers should appear etc.

**Improve UI:** The UI can be be improved to make the extension more consistent and bug-free.  

## Contributors

* [Kriti Khullar](https://github.com/kriti0207)
* [Muskan Gupta](https://github.com/muskan7828)
* [Suneha Bose](https://github.com/sbosenc)
* [Urvashi Kar](https://github.com/Urvashi74)
* [Usman Mahmood Khan](https://github.com/usmanwardag)

 
