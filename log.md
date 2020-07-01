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

**Link to work:** <a href="https://bit.ly/2CWoGGX">HTML tutorial redone using dogs.</a>

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

There are several other properties that were studied in this part of the course. I think that the main goal, at least for now, is to know that they exist so when I want to apply some of these effects I know what to look for.