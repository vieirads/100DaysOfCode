# 100 Days Of Code - Log

### Day 1: June 29, 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress:** Finished the HTML tutorial in <a href="https://www.freecodecamp.org/" alt="Link to FreeCodeCamp." target="_blank">FreeCodeCamp</a>. 

**Thoughts:** I knew some of the basics already:

<ul>
<li>heading tags <mark style="background-color: #C1C7C9; font-family: monospace;">h1, h2, h3</mark> etc.;</li>
<li>paragraph tag <mark style="background-color: #C1C7C9; font-family: monospace;">p</mark>;</li>
<li>ordered and unordered lists tags <mark style="background-color: #C1C7C9; font-family: monospace;">ol</mark> and <mark style="background-color: #C1C7C9; font-family: monospace;">ul</mark>, repectively;</li>
<li>anchor tags <mark style="background-color: #C1C7C9; font-family: monospace;">a</mark> to external and internal links;</li>
<li>image tag <mark style="background-color: #C1C7C9; font-family: monospace;">img</mark>.</li>
</ul>

I learned a little bit about ``input`` tags and how they can be have different types like ``text``, ``radio``, and ``checkbox``, all of which should be within ``form`` tag. For input tags of the type radio and checkbox, they should be within a label tag in order to provide text to the options they are referring to. If I understood correct, the attribute ``name`` should be given to these input types. Since radio buttons work like on/off, you can only have one option, thus, it should be from "the same group". I have redone the example but using dogs, since I am a dog person.

**Link to work:** <a id="link-D1" href="https://bit.ly/2VBNLxr">HTML tutorial redone using dogs.</a>

### Day 2: June 30, 2020

**Today's Progress:** I went through the Basic CSS tutorial in <a href="https://www.freecodecamp.org/" alt="Link to FreeCodeCamp." target="_blank">FreeCodeCamp</a>.

**Thoughts:** I learn the basics of CSS styling properties. You can set the properties for a ``class`` using the ``.class-name{}`` and its properties within curly brackets. For ``id``, you should use ``#id-name{}`` and its propertis within curly brackets. Every property is of the form ``variable: value;``.  Variables like ``padding`` and ``margin`` can have more than one value. In this particular case, it can have four values, that should be separated by a space. These values represent the ``padding`` or ``margin`` in ``top``, ``right``, ``bottom``, and ``left``, called the clock-wise notation, or something like that. These values can also be set by a particular variable name, like ``padding-top``. 

One element/tag can have more than one class: ``class="calss1 class2"``. Since we can have multiple properties from different classes and combined with the properties of the tag id, there are some rules of hierarchy on how they are override:

<ol>
    <li>classes override the body properties;</li>
    <li>within classes, order declaration matters: top to bottom, prevailing the one at the bottom;</li>
    <li>id override classes;</li>
    <li>inline style override id;</li>
    <li>if you set !important into a class property, it overrides all else.</li>
</ol>

We can also style elements based on the ``property="value"`` within the tags. To do this, we can create ``[property="value"]{}`` where the style for the tags matching this property with this specific value is applied.

Variables can be defined using the notation ``--variable-name`` and can be called using ``var(--variable-name)``. 

One last thing is that some browsers may not have the compatibility for the properties we are using. In this case, we can use ``fallback`` values or else they will use the standard property for that tag. The fallback value should be specified after the main value, separated by a comma ``,``. If used with a variable, one should put the fallback value within the parenthesis: ``var(--variable-name, fallback-value)``.

P.s.: I also learned that we can import different fonts using <a href="https://fonts.google.com/">Google Fonts</a> and how to an <a href="https://bitly.com/">URL shortener</a><br> can be helpfull.

**Link to work:** no link for this part.

### Day 3: July 01, 2020

**Today's Progress:** Today I started the ``Applied Visual Design`` section at <a href="https://www.freecodecamp.org/" alt="Link to FreeCodeCamp." target="_blank">FreeCodeCamp</a>. 



**Thoughts:** Learn about some CSS styling properties to design your page: , ``width``, ``height`` etc. Ways to transform the text itself, appl
<ul>
    <li>text-align: values can be justify, center, right, and left;</li>
    <li>width and height: values can be any measurement, redisigning the element;</li>
    <li>tags 'b' and 'strong' to make the text look bold face. The same as applying the CSS property 'font-weight: bold;'</li>
    <li>tag 'u' to underline the text, which is the same as applying the CSS property 'text-decoration: underline;'</li>
    <li>tag 'em' or 'i' to make the text italic. This can also be accomplished by usgin the CSS property 'font-style: italic;'</li>
    <li>tags 'strike' or just 's' can be used to apply the CSS property 'text-decoration: line-through;' which cross the text with a horizontal line in the middle;</li>
    <li>the self closing tag 'hr' which draws a horizontal line across the element. Used, for instance, to separate topics.
</ul>

There are several other properties that were studied in this part of the course. I think that the main goal, at least for now, is to know that they exist so when I want to apply some of these effects I know what to look for. I try to put some of the things I learned into the ``DogPhotoApp`` from <a href="#link-D1">day 1</a>.

**Link to work:** <a href="https://bit.ly/2AlYoNf">DogPhotoApp with some CSS styling.</a>

### Day 4: July 02, 2020

**Today's Progress:** I continued the <a href="https://www.freecodecamp.org/learn" target="_blank" alt="Link to FreeCodeCamp.">Responsive Web Design Certification (300 hours)</a>. I am now at the 50% of ``Applied Visual Design``. I also applied what I learn in other project I am doing in ``Jupyter Notebook``. I used ``ol`` and ``li`` tags to make a list using sub-item numbering. Of course I had to look up on StakOverflow, but I understand the code behind it. I call this progress.

**Thoughts:** I have learn a little bit more about text styling. I was amazed by the simplicity of using ``hover``. Still struggling to understand the value ``absolute`` from the variable ``position``. Started to learn the basics about color theory, already have learned about the color wheel and how using hex made it very clear how colors can cancel each other.

**Link to work:** If you are interested, you can see the project I am working on in my GitHub repository: <a href="https://bit.ly/3inqVTL" alt="Curso-de-extensao" target="_blank">Curso-de-extensao</a>. The repository is entire in Brazilian Portuguese, because it is for online course I am going to teach.

### Day 5: July 03, 2020

**Today's Progress:** I continued the <a href="https://www.freecodecamp.org/learn" target="_blank" alt="Link to FreeCodeCamp.">Responsive Web Design Certification (300 hours)</a>. Kept learning about color theory applying it to simple divs using CSS stylesheet. I also learn how to import a custom CSS into my Jupyter Notebook, answering a question in [Kaggle](https://www.kaggle.com/) on how to do this. I was mistaken by a bot since I created a profile just to answer this.

**Thoughts:** I really like this section. I always liked to make pretty graphics for my research, I think that a good illustration has a great power in explaining something. 

**Link to work:** You can see the page of my project [here](https://vieirads.github.io/Curso-de-extensao/). It's a page generated by GitHub using the README.md project file. However, I tried to implement some of the things I have learn about HTML and CSS.

### Day 6: July 04, 2020

**Today's Progress:** I continued the <a href="https://www.freecodecamp.org/learn" target="_blank" alt="Link to FreeCodeCamp.">Responsive Web Design Certification (300 hours)</a>. Finally learn how to make color gradients. It was much easier than I thought it would be. linear-gradient() function is very easy to use. repeating-linear-gradient() is also pretty easy to use. Saw ``:before`` and ``:after`` pseudo properties and ``@keyframes``.

**Thoughts:** I still have to study more about the pseudo properties and keyframes. 

**Link to work:** no link for this part.

### Day 7: July 05, 2020

**Today's Progress:** I continued the <a href="https://www.freecodecamp.org/learn" target="_blank" alt="Link to FreeCodeCamp.">Responsive Web Design Certification (300 hours)</a>. Learn a little about animations using ``@keyframes``.

**Thoughts:** Some concepts are kind of clear to me. However, I am having a little difficult with aspects of positioning elements. Still have to learn more about about ``:before`` and ``:after`` because I did not understand it. I made a ``Deadpool's face`` with animated eyes to practice some of the things I learned.

**Link to work:** Link to <a href="https://bit.ly/2ZI33l9" alt="Link to Deadpool's face.">``Deadpool's face``</a>.

### Day 8: July 06, 2020

**Today's Progress:** Went through some of the items in ``Applied Accessibility`` section in **freeCodeCamp**. Mostly worked on my classes notebooks today.

**Thoughts:**  I have never thought about how text elements should be clear, not just to make your site/idea direct and simple, but also to provide accessibility. Guess I am learning more than how to code doing this chalenge.

**Link to work:** no link for this part.

### Day 9: July 07, 2020

**Today's Progress:** Continued the ``Applied Accessibility`` section in **freeCodeCamp**. Mostly worked on my classes notebooks today and fixed the kernel of my ubuntu to support my wacom tablet.

**Thoughts:**  Still learn how little details, such as group elements can help people to better understand what is going on in your page. 

**Link to work:** no link for this part.

### Day 10: July 08, 2020

**Today's Progress:** Finished the ``Applied Accessibility`` section in **freeCodeCamp**. Finally learn how to make elements navigable by your keyboard: using ``accesskey`` to provide a key (e.g. "c") or ``tabindex`` using integers. 

**Thoughts:** I have to put in practice some of the things I am learning so I won't forget them. The concepts are really nice and simple to produce such effects.

**Link to work:** no link for this part.

### Day 11: July 09, 2020

**Today's Progress:** I was studying ``Responsive Web Design Principles`` at **freeCodeCamp**. Manage to learn how to properly resize an image according to the device being used by using the ``@media`` to pass conditions before applying a CSS style.

**Thoughts:** This lesson is pretty cool and helped me to fix an image display in other project. However, I couldn't go through it because my code doesn't get validate on the third Challenge. 

**Link to work:** no link for this part.

### Day 12: July 10, 2020

**Today's Progress:** Today I worked on some elements of my introductory python course's page. I applied some CSS to make display figures in a nicer way and also modified the mark tag, adding an animation using ``@keyframes`` that make the background change colors when you hover. 

**Thoughts:** I feel really great (and tired) about what I manage to do today. About two weeks ago I didn't even have and idea of how you could create a background using gradient of colors. Now I manage to put this nice effect into a simple animation. 

**Link to work:** You can see the page of my project [here](https://vieirads.github.io/Curso-de-extensao/). It's a page generated by GitHub, based on my ``README.md`` file project. However, I tried to implement some of the things I have learn about HTML and CSS.

### Day 13: July 11, 2020

**Today's Progress:** Fixed the problem I was having with the challenge in "Responsive Web Design Principles" by using Firefox. Also went through the flexbox section of **freeCodeCamp**. Despite the concept being simple and straightforward, I still have some practice to do. 

**Thoughts:** It is pretty cool and simple how the elements can change according to simple commands, such as ``flex-shrink`` and ``flex-grow``. For the elements respond to such properties, they should be child of a tag with a CSS property ``display: flex``. You can also change the orientation of the elements (vertical or horizontal) and tell how they should be placed.

**Link to work:** no link for this part.

### Day 14: July 12, 2020

**Today's Progress:** Today I started the CSS Grids challenges at **freCodeCamp**. So far it is going pretty smooth. You have to set up the parent tag with ``display: grid;`` and then you can use its properties, such as, ``grid-template-columns`` and ``grid-template-rows``. For the child tags you have properties like ``grid-column`` and ``grid-row``. These properties are responsible to span the element from the n-th line to the (m-1)-th. For instance, ``grid-column: 3/5;`` will span the child element from column 3 to 4. You can also align the items by using the ``justify-self`` and ``align-self`` for columns and rows, respectivelly.

**Thoughts:** This lesson is nice. From it I can learn how to properly create and place items within a parent tag with ease.

**Link to work:** no link for this part.

### Day 15: July 13, 2020

**Today's Progress:** Finished the CSS Grids challenges. Learned more about how we can align all the items horizontally or vertically within the grid by using ``justify-items`` and ``align-items``, respectivelly. Also learned how you can group items within an area that you create within the grid. To accomplish this we can use ``grid-area`` and create areas using whatever name you want, considering the numbers of columns and rows of your grid. For instance, if you have a grid 3x3, you can separate areas like this:

```CSS
    grid-area: 
    "header header header"
    "advert content content"
    "footer footer footer";
```

Then you use the names so your child element can be place where the assigned name appears.

One can also specify this property within an item withouth create a ``grid-area`` within the container (parend tag). To do this, you specify the index of the columns and rows where the item should start and end. For instance, the ``class item``, for it to be placed spanning the columns 2 and 3 and rows 4 and 5, we should write

```CSS
    .item {
        grid-area: 2/4/3/5;
    }
```

Since you can create grids with any number of columns and rows, it is useful to use the functino ``repeat(n, d)``, where ``n`` is the number of times you want to repeat the ``d`` comand, which can be a measure of the size of the column/row. An example of the usage of this function:

```CSS
    grid-template-column: repeat(2, 1fr 50px);
```

which creates ``grit-template-column: 1fr 50px 1fr 50px;``. Another useful function is ``minmax(vmin, vmax)``, where ``vmin`` and ``vmax`` are the minimum and maximum values. We can combine the last two functions two produce a nice effect. Using put the option ``auto-fill`` on the argument ``n`` of the ``repeat`` function. This will fill automatically the spaces considering the items. When combined with the ``minmax`` function, when we reescale the window, the elements will have a minumum value ``vmin``, if they shrink more than this, another column/row is created to accomodate the item. When you stretch your window, the items can only have ``vmax`` as their maximum size. However, this can left the container (parent tag) with empty columns, since the maximum size of items is ``vmax``. If you do not want empty space in your container, you can use ``auto-fit``, which will adjust the items sizes to fit the container's size.

When we are resing the window, we can change how the grid is displayed to a better visualization of the elements within the container. We can use ``@media('contidion')`` and dictate the new rules. The 'condition' can be something like ``min-width: 300px;``, where if the width of the window reaches ``299px`` or less, the new ruler are implemented.

**Thoughts:** Learned a lot about grids. In my opinion, the use of this property is going to make development of a page much easir, specieally if you want to resize elements properly. 

**Link to work:** no link for this part.

### Day 16: July 14, 2020

**Today's Progress:** Applied some CSS style to my Jupyter Notebooks to highligh ``exercices`` and ``answers`` cells. Started the project at **freeCodeCamp** where I have to design a ``Tribute Page``. I also download an app on my phone to practice whenever I have to kill time.

**Thoughts:** I am really liking how I can style stuff using CSS.

**Link to work:** no link for this part.

### Day 17: July 15, 2020

**Today's Progress:** I wrote a bit on my <a href="https://bit.ly/2OGHooJ" target="_blank">Tribute page</a> as a project for the freeCodeCamp. I hope I get this done by tomorrow. I just have to put some text and some style ideas I have. 

**Thoughts:** I like the part where I can finally edit my CSS and make the page looks nice and smooth.

**Link to work:** <a href="https://bit.ly/2OGHooJ" target="_blank">Tribute page</a> on codepen.

### Day 18: July 16, 2020

**Today's Progress:** Put some CSS style on my <a href="https://bit.ly/2OGHooJ" target="_blank">Tribute page</a> (freeCodeCamp project). Trying to implement some custom styling into another page together with a friend. Trained some CSS grid and @media to adjust elements on the page based on a width condition.

**Thoughts:** I manage to do some of the things that I wanted to do. However, I still have much to learn. One step at the time.

**Link to work:** <a href="https://bit.ly/2OGHooJ" target="_blank">Tribute page</a> on codepen (now with some styling :)).

### Day 19: July 17, 2020

**Today's Progress:** Worked a bit with div tags and how to make children fit within their parent's limits.

**Thoughts:** It was hard at first, but I think I am starting to understand how some properties work.

**Link to work:** no link for this part.

### Day 20: July 18, 2020

**Today's Progress:** Create a Survey form as the second project of Responsive Web Design from **freeCodeCamp**. Worked on my HTML and CSS beginner skills.

**Thoughts:** This was really fun to make. 

**Link to work:** https://bit.ly/2CPtNsa

### Day 21: July 19, 2020

**Today's Progress:** Finally updated <a href="https://vieirads.github.io">GitHub page</a> with what I learned of `HTML` and `CSS` so far. Still have a lot of content to add, but it is something already.

**Thoughts:** Feeling good about what I can do using this tools.

**Link to work:** https://vieirads.github.io

### Day 22: July 20, 2020

**Today's Progress:** Kept working on my <a href="https://vieirads.github.io">GitHub page</a>. Tried to implement `grid` and `flexbox` into some components. I also tried to use `@media` queries in order to make the size of the elements and fonts responsive.

**Thoughts:** I tried to do everything I could without google. Before looking for a specific answer, I tried to read the documentation again. Most of the time it worked!

**Link to work:** https://vieirads.github.io

### Day 23: July 21, 2020

**Today's Progress:** Study and reproduced the Portifolio example by **freeCodeCamp**. I wrote the CSS trying to understand what each property would do. It was a good exercise.

**Thoughts:** I am feeling good about what I am learning. I am remembering some of the study that I saw during the course and getting a chance to better understand them.

**Link to work:** https://codepen.io/dennersvieira/pen/QWyJodO

### Day 24: July 22, 2020

**Today's Progress:** Started to study JavaScript at **freeCodeCamp**. I want to learn more about how the dynamics of the pages work, and, of course, how can I implement them.

**Thoughts:** Going throught the begginer's part. So far it is ok, since I already studied this part once.

**Link to work:** no link for this part.

### Day 25: July 23, 2020

**Today's Progress:** Studied a bit more of JavaScript at **freeCodeCamp** and read some things about CSS, which made me learn about depth of properties of classes: simple stuff, but I didn't know about it.

**Thoughts:** I really like CSS =)

**Link to work:** no link for this part.

### Day 26: July 24, 2020

**Today's Progress:** Finished the Basic JavaScript at **freeCodeCamp**.

**Thoughts:** So far it is going smooth. 

**Link to work:** no link for this part.

### Day 27: July 25, 2020

**Today's Progress:** Studied a little CSS and JavaScript.

**Thoughts:** Very tired today.

**Link to work:** no link for this part.

### Day 28: July 26, 2020

**Today's Progress:** Finished the ES6 section at **freeCodeCamp**. Also started to read about jQuery.

**Thoughts:** Still haven't figure out what is the deal with Promises.

**Link to work:** no link for this part.

### Day 29: July 27, 2020

**Today's Progress:** Went through the Bootstrap and jQuery sections of **freeCodeCamp**. Bootstrap is very helpful and have everything ready for use and it is totally responsive. Learn the basics of jQuery, but I still need more content to do the stuff I want o my page.

**Thoughts:** Pretty cool stuff and easy to use.

**Link to work:** no link for this part.

### Day 30: July 28, 2020

**Today's Progress:** Went through the Sass section of **freeCodeCamp** and started the React one. I think I have seen enough for now. Tomorrow I will start building small projects.

**Thoughts:** I found a page with 100 projects: (100+ JS projects)[https://jsbeginners.com/javascript-projects-for-beginners/]. I will start them tomorrow.

**Link to work:** no link for this part.

### Day 31: July 29, 2020

**Today's Progress:** Wrote a little code in python today for a project. Also, started creating simple projects using HTML, CSS, and JS. Made a simple page with a button that changes the background color when clicked.

**Thoughts:** I think that creating projects, despite simple, help a lot more than going through tutorials, these serve for you to create a base and know the stuff that exist. 

**Link to work:** https://bit.ly/33bXgYz

### Day 32: July 30, 2020

**Today's Progress:** Made two applications using HTML, CSS, and JS:
- First one changes the color of the background and display the Hex code of the color;
- Second one is a random quote generator, that also changes the color of the elements using a single color or a mix of colors.

**Thoughts:** Getting the hand of the basic JS applied to HTML and CSS. Reaaly enjoying it!

**Link to work:** [Hex background color](https://github.com/vieirads/100DaysOfCode/tree/master/projects/100_js_projects/2_hex_change_background_color)
[Random quote generator](https://github.com/vieirads/100DaysOfCode/tree/master/projects/100_js_projects/3_random_quotes)


### Day 33: July 31, 2020

**Today's Progress:** Started another little project where you type a message and it is displayed somewhere else. Following this list of projects [here](https://jsbeginners.com/javascript-projects-for-beginners/) in order to learn HTML, CSS, and JS.

**Thoughts:** I am having fun with these projects.

**Link to work:** [Pass the message](https://github.com/vieirads/100DaysOfCode/tree/master/projects/100_js_projects/4_pass_the_message)


### Day 34: August 01, 2020

**Today's Progress:** Mande a simple counter app using HTML, CSS, and JS. Learning how to deal with event listener.

**Thoughts:** I am pretty proud of the things I am learning.

**Link to work:** [Counter](https://github.com/vieirads/100DaysOfCode/tree/master/projects/100_js_projects/5_counter)

### Day 35: August 02, 2020

**Today's Progress:** Started a new project that consists of a simple image slider. Did not finish it yet.

**Thoughts:** -

**Link to work:** no link yet.

### Day 36: August 03, 2020

**Today's Progress:** Made a simple calculator using HTML, CSS, and JavaScript. The code is on an app on my phone, but tomorrow I am going to put it on files in a project folder.

**Thoughts:** I have to learn how to call create and add event listeners using some kind of loop in order to write less code.

**Link to work:** no link yet.

### Day 37: August 04, 2020

**Today's Progress:** Worked a bit with python doing some figures. Learned how to select multiple queries using JavaScript just in one line of code. I am going to test this on my calculator and put the code on codepen.

**Thoughts:**

**Link to work:** No link for this part.

### Day 38: August 05, 2020

**Today's Progress:** Created an iPhone case with a calculator app that works. Well, it redirects you to the app. I still have to write the JavaScript functions to make the calculator, hmmm, calculate.

**Thoughts:** I am pretty happy with my progress. I didn't even see the time flowing. Really cool working with this stuff.

**Link to work:** [iPhone calculator](https://bit.ly/3a0WDCD)

### Day 39: August 06, 2020

**Today's Progress:** Implemented the functionality on the calculator app.

**Thoughts:** I am getting better at this.

**Link to work:** [iPhone calculator](https://bit.ly/3a0WDCD)

### Day 40: August 07, 2020

**Today's Progress:** I didn't have time to work with html, css, and javascript today. However I prepared a class about quantitative text analysis (PT) using python.

**Thoughts:** Amazing how texts have universal properties explained by such simple equations.

**Link to work:** no link to this part.

### Day 41: August 08, 2020

**Today's Progress:** Worked a bit with python preparing my class on quantitative text analysis. 

**Thoughts:** I manage to code much better than the first time I did such analysis.

**Link to work:** no link to this part.

### Day 42: August 09, 2020

**Today's Progress:** Finished the content of my class on quantitative text analysis using python.

**Thoughts:** I manage to code much better than the first time I did such analysis.

**Link to work:** no link to this part.

### Day 43: August 10, 2020

**Today's Progress:** Worked with python on a separated project.

**Thoughts:** The results I got are much better than I was expecting.

**Link to work:** no link to this part.

### Day 44: August 11, 2020

**Today's Progress:** Learning to use ipywidgets together with matplotlib to create a package to edit text on plots.

**Thoughts:** Have to install [ipympl](https://github.com/matplotlib/ipympl) before start using the widgets with Jupyter notebook.

**Link to work:** no link yet.

### Day 45: August 12, 2020

**Today's Progress:** I was curious about AngularJS. So I followed a tutorial on how to add elements on table. I am going to use it to make a todo list with a timer.

**Thoughts:** So far I understood what is going on.

**Link to work:** no link.

### Day 46: August 13, 2020

**Today's Progress:** Progressing in my chores/countdown app using AngularJS. Still grasping the basics and trying to google what I need. So far things are working. Even though I don't know why...

**Thoughts:** I think I might have to read some basic material first. But, in the event of things keep working, I will continue with this project.

**Link to work:** no link.

### Day 47: August 14, 2020

**Today's Progress:** Continued working on my `taskcounter` project. Added several buttons and implemented their functionalities. Now you can add, delete, skip, start, pause, resume and mark the tasks as done.

**Thoughts:** I have to work on the order of the list as itens are being finished. When they have status 'Done' or 'Skipped' it should go to the end of the tasks marked as 'Queued'.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 48: August 15, 2020

**Today's Progress:** Worked on my task app. Modified the time display to HH:MM:SS. Learn a little bit about the Date() object: how to set and get its properties.

**Thoughts:** I was doing several conditions to sum the seconds and minutes in order to display it correctly. But at a certain moment I was pissed and thought: "There has to be an easier way." Using the `Date()` object was the easier way.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 49: August 16, 2020

**Today's Progress:** Tried to make a countdown for my taskcounter app and could not figure it out. 

**Thoughts:** Have to better understand the basics of AngularJS.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 50: August 17, 2020

**Today's Progress:** Studied a bit of AngularJS in [codecademy](https://www.codecademy.com/learn). I have to learn the basics properly in order to come back to my `taskcounter` app.

**Thoughts:** So far it is going smooth.

**Link to work:** no link.

### Day 51: August 18, 2020

**Today's Progress:** Studying on codecaemy, I learned how to format date outputs. This made the code of my `taskcounter` app cleaner and easier to achieve what I wanted. Happy with this progress =)

**Thoughts:** Sometimes it pays off to study a bit instead of keep "cracking your head" trying things you don't even know how it works.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 52: August 19, 2020

**Today's Progress:** Added a dropdown to select hours and minutes for the tasks in my `taskcounter` app. Also modified the button skip in case you want to retake the skipped task, however it modifies all the buttons with this property. Have to fix this.

**Thoughts:** I have to learn how to access a property concerning only the element I am dealing with in a click event, not all that share the same structure.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 53: August 20, 2020

**Today's Progress:** Fixed the display of button `Skip`. Now only the clicked button changes to `Retake`. Create a simple solution involving arrays. The point is to make things work first =)

**Thoughts:** Still think that there is a better way to solve this issue, but so far this one works.

**Link to work:** https://vieirads.github.io/taskcounter/


### Day 54: August 21, 2020

**Today's Progress:** Worked on my `taskcounter` app. Added a feature where the taskas are grouped by their status. Also, when a task is adde, it goes right after the last queued one. 

**Thoughts:** I learned how to create a method for arrays.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 55: August 22, 2020

**Today's Progress:** Manage to make the final time to stop once you click the button start. However, it does not account for the time paused when the button paused is clicked and then resume. Manage to make a countdown for the time in the tasks, but I try to modified it and it does not work anymore.

**Thoughts:** I have to come back for these countdowns tomorrow and the wrong ellapsase time between paused and resumed.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 56: August 23, 2020

**Today's Progress:** Make the timers work in my `taskcounter` app. Now, when the app is open, the final time is increasing to considering the real time you are going to finished the programmed tasks. Onde you click the 'Start' button, the final time stops. This event triggers the first task, which takes the status to `In progress` and its time starts to decrease by the second. Also, the ellapsed time of all the tasks combined keeps increasing. `Skipped`, `Done`, and `Queued` tasks are groupe separetly.

**Thoughts:** What I still have to do: 
- Fix the repositioning of the task if you hit the button `Retake`;
- Put an alert once there is no queued tasks, letting the user know it has finished all of the tasks.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 57: August 24, 2020

**Today's Progress:** I have added a little CSS to the app. Today was full of classes and I did not have enough time to work on my project.

**Thoughts:** Still have to fix the things mentioned on the `Day 56`.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 58: August 25, 2020

**Today's Progress:** Added a bit more of CSS to my `taskcounter` app.

**Thoughts:** Still have to fix the things mentioned on the `Day 56`.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 59: August 26, 2020

**Today's Progress:** Added some change in style using css when a event is met. The classes and ids are changing based on the return of variables and functions within the angularjs app. These are then found in the css file and the style is applied accordingly.

**Thoughts:** So far I think it is easier to make effects using this dynamical set of classes and ids using angularjs.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 60: August 27, 2020

**Today's Progress:** Made changes on the color scheme of the app on the `style.css` file. Had a lot of classes to teach and a meeting to attend.

**Thoughts:** I wish I could have worked more on my app.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 61: August 28, 2020

**Today's Progress:** Polished the design of the `taskcounter` app and fixed some bugs. Still have to put an alert message when all the tasks are done.

**Thoughts:** Pretty proud of what I did =)

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 62: August 29, 2020

**Today's Progress:** Studied a little bit of D3. It is really nice to use and it is very intuitve. So far at least.

**Thoughts:** I thought that this module was just to create plots in order to visualize data, but it is so much more. And it has some of the stuff I was wondering how to do, like how to change the style of an element based on its value.

**Link to work:** no link for this part.

### Day 63: August 30, 2020

**Today's Progress:** Studied a bit of Angular on SoloLearn.

**Thoughts:** I didn't know that Angular used mainly TypeScript.

**Link to work:** no link for this part.

### Day 64: August 31, 2020

**Today's Progress:** Put an alert message in my `taskcounter` app when all the tasks are done. However, the message doesn't go away once I click on the `Ok` button. Have to fix that.

**Thoughts:** I am working with the oldest version of Angular, which is AngularJS. I have to upgrade this and learn the most recent framework.

**Link to work:** https://vieirads.github.io/taskcounter/

### Day 65: September 01, 2020

**Today's Progress:** Studied a bit of Angular on Sololearn and the topic was how the data travels until it reaches the frontend display.

**Thoughts:** I still have to study more this structures.

**Link to work:** no link for this part.

### Day 66: September 02, 2020

**Today's Progress:** Continued to study Angular on Sololearn. Learned about one-way and two-way data binding.

**Thoughts:** Some concepts that I know about have specific names. I think I better learn the proper names.

**Link to work:** no link for this part.

### Day 67: September 03, 2020

**Today's Progress:** Studied a bit of React. Create a app using the commands in terminal.

**Thoughts:**  There are a lot of files that I have no idea what they are intend for. But I will keep things slow and learn the aspects of it bit by bit.

**Link to work:** no link for this part.

### Day 68: September 04, 2020

**Today's Progress:** Studied a bit more of react and learn how to create tags using functions and classes.

**Thoughts:** I still have to find out how to put conditions when I click a button.

**Link to work:** no link for this part.

### Day 69: September 05, 2020

**Today's Progress:** Studied a bit of React on Sololearn. Learn a bit about how to use `setState` and `Hooks`

**Thoughts:** Very tired today. Tomorrow I kee studying.

**Link to work:** no link for this part.

### Day 70: September 06, 2020

**Today's Progress:** Studied a bit of React. 

**Thoughts:** Today I did not study much. I took a day off.

**Link to work:** no link for this part.

### Day 71: September 07, 2020

**Today's Progress:** Finished the React section on Sololearn tutorials. Manage to put a message of alert into one of my study projects when a button click event is triggered.

**Thoughts:** Now that I have some basics, I have to start building something.

**Link to work:** no link for this part.

### Day 72: September 08, 2020

**Today's Progress:** Studied a bit of Redux on Sololearn. 

**Thoughts:** To be very honest, I still don't get the importance of this framework.

**Link to work:** no link for this part.

### Day 73: September 09, 2020

**Today's Progress:** Started to learn about `kivy` package on python. I am really liking it. Seems to be fun to work with.

**Thoughts:** This package has it's own language, which looks like a CSS. You can separate all the GUI in a `.kv` file and all the logic of the app within the `.py` file.

**Link to work:** no link for this part.

### Day 74: September 10, 2020

**Today's Progress:** Studied a bit more of Kivy and started to make a simple calculator.

**Thoughts:** I did a quick design with simples buttons and now I have to write the logic.

**Link to work:** no link for this part.

### Day 75: September 11, 2020

**Today's Progress:** Struggled to make the calculator using kivy. Tomorrow I will try again.

**Thoughts:** I am not having enough time to study the way I wanted, because I have a test next week.

**Link to work:** no link for this part.

### Day 76: September 12, 2020

**Today's Progress:** I didn't code today. I had to study for my upcoming test.

**Thoughts:** I wanted to code, but I had to study for something else right now.

**Link to work:** no link for this part.

### Day 77: September 13, 2020

**Today's Progress:** I didn't code today. I had to study for my upcoming test.

**Thoughts:** I wanted to code, but I had to study for something else right now.

**Link to work:** no link for this part.