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

**Link to work:** You can see the page of my project using Jupyter Notebooks [here](https://vieirads.github.io/Curso-de-extensao/). It's a page generated by GitHub, but I tried to implement some of the things I have learn about HTML and CSS.

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