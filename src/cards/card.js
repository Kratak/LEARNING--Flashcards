import React, { Component } from 'react';
import './Card.css'

const Card = {
    // JavaScript constructor() Method
    1: 
    <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript Number - constructor()</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">It returns a reference to the Number function 
        that created the instance's prototype.</element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text"><pre>
        <div className="c_this inn">number</div>
        <div className="c_plain-text inn tab-2">.</div>
        <div className="c_this inn">constructor </div>
        <div className="c_plain-text inn">()</div>
        </pre></element></p>
        <br/>

        <p className="tab2">Return value<br/>
        <element className="c_plain_text">Returns the function that created this object's instance.
        </element></p><br/>

        <p className="tab2">Example</p>

        <exp>
        <pre className="card-light">
        <div className="c_html">html</div>
            <div className="c_head tab2">head</div>
                <div className="c_tittle inn tab3">title</div>
                <div className="c_plain-text inn">JavaScript constructor() Method</div>
                <div className="c_tittle-end inn">title</div>
            <div className="c_head-end tab2">head</div>
            <br/>
            <div className="c_body tab2">body</div>
      
                <div className ="c_script tab3">script  
                <div className="c_type-js inn"> type</div>
                <div className="c_plain-text inn tab-1"> = </div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num</div>
                    <div className="c_function-js inn"> = </div>
                    <div className="c_var inn">new </div>
                    <div className="c_number-js inn">Number </div>
                    <div className="c_plain-text inn">(</div> 
                    <div className="c_type-js inn">177.1234</div> 
                    <div className="c_plain-text inn tab1">);</div>
                    </div>


                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.constructor() is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn tab1">num </div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_this inn">constructor </div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                <div className ="c_script-end tab3">script</div>
            <br/>
            <div className="c_body-end tab2">body</div>
        <div className="c_html-end">html</div>
        </pre>
        </exp>

        <br/>
        <p className="tab2">Output</p>
        <exp>
        <pre className="card-light">
        <div className="c_plain-text inn">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_this inn">constructor </div>
        <div className="c_plain-text inn">() is : </div>
        <div className="c_var inn">function </div>
        <div className="c_function-js inn">Number</div>
        <div className="c_plain-text inn">()</div> 
        <div className="c_curly-brack inn">
        <div className="c_square-brack inn">native code </div></div>
        </div>
        </pre>
        </exp>
        <br/>

    </div>,

    // JavaScript Number - toExponential()
    2: 
    <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript Number - toExponential()</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">
        This method returns a string representing the  
        <b> number </b> object in exponential notation.
        </element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text">
        <pre>
        <div className="c_this inn">number</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toExponential</div>
        <div className="c_plain-text inn">( [fractionDigits] )</div>
        </pre></element></p>
        <br/>

        <p className="tab2">Parameter Details<br/>
        <element className="c_plain_text"><b>fractionDigits</b>
         − An integer specifying the number of digits after the decimal point. 
        Defaults to as many digits as necessary to specify the number.
        </element></p><br/>

        <p className="tab2">Return value<br/>
        <element className="c_plain_text">
        A string representing a Number object in exponential 
        notation with one digit before the decimal point,
        rounded to <b>fractionDigits</b> digits after the decimal point.
         If the <b>fractionDigits</b> argument is omitted,
        the number of digits after the decimal point defaults to the number 
        of digits necessary to represent the value uniquely.
        </element></p><br/>

        <p className="tab2">Example</p>

        <exp>
        <pre className="card-light">
        <div className="c_html">html</div>
            <div className="c_head tab2">head</div>
                <div className="c_tittle inn tab3">title</div>
                <div className="c_plain-text inn">Javascript Method toExponential()</div>
                <div className="c_tittle-end inn">title</div>
            <div className="c_head-end tab2">head</div>
            <br/>
            <div className="c_body tab2">body</div>
      
                <div className ="c_script tab3">script  
                <div className="c_type-js inn">type</div>
                <div className="c_plain-text inn tab-1"> =</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num </div>
                    <div className="c_function-js inn">= </div>
                    <div className="c_type-js inn">77.1234</div>
                    <div className="c_plain-text inn">;</div>
                    </div>

                    <div className="tab4"> 
                    <div className="c_var inn">var </div> 
                    <div className="c_plain-text inn">val </div> 
                    <div className="c_function-js inn">= </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js2 inn">toExponential</div>
                    <div className="c_plain-text inn">();</div>
                    </div>


                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toExponential() is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn tab-1">val</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4"> 
                    {/* srction two (4)*/}
                    <div className="c_plain-text inn">val </div> 
                    <div className="c_function-js inn">= </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js2 inn">toExponential</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">4</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toExponential(4) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn tab-1">val</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4"> 
                    {/* srction tree (2)*/}
                    <div className="c_plain-text inn">val </div> 
                    <div className="c_function-js inn">= </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js2 inn">toExponential</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">2</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toExponential(2) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn tab-1">val</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>


                    <div className="tab4"> 
                    {/* srction four */}
                    <div className="c_plain-text inn">val </div> 
                    <div className="c_function-js inn">= </div>
                    <div className="c_type-js inn">77.1234</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js2 inn">toExponential</div>
                    <div className="c_plain-text inn">();</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"77.1234.toExponential() is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn tab-1">val</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                <div className ="c_script-end tab3">script</div>
            <br/>
            <div className="c_body-end tab2">body</div>
        <div className="c_html-end">html</div>
        </pre>
        </exp>

        <br/>
        <p className="tab2">Output</p>
        <exp>
        <pre className="card-light">
        <div className="c_plain-text inn">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn tab-1">.</div>
        <div className="c_this inn">constructor </div>
        <div className="c_plain-text inn">() is : </div>
        <div className="c_var inn">function </div>
        <div className="c_function-js inn">Number</div>
        <div className="c_plain-text inn">()</div> 
        <div className="c_curly-brack inn">
        <div className="c_square-brack inn">native code </div></div>
        </div>
        </pre>
        </exp>
        <br/>

    </div>,
   
    //    JavaScript Number - toFixed()
    3: 
    <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript Number - toFixed()</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">
        This method formats a number with a <b>specific number</b> 
        of digits to the right of the decimal.
        </element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text">
        <pre>
        <div className="c_this inn">number</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">( [digits] )</div>
        </pre></element></p>
        <br/>

        <p className="tab2">Parameter Details<br/>
        <element className="c_plain_text"><b>digits </b>
         − The number of digits to appear after the decimal point.
        </element></p><br/>

        <p className="tab2">Return value<br/>
        <element className="c_plain_text">
        A string representation of number that does not use exponential 
        notation and has the exact number of <b>digits</b> after the decimal place.
        </element></p><br/>

        <p className="tab2">Example</p>

        <exp>
        <pre className="card-light">
        <div className="c_html">html</div>
            <div className="c_head tab2">head</div>
                <div className="c_tittle inn tab3">title</div>
                <div className="c_plain-text inn">JavaScript toFixed() Method</div>
                <div className="c_tittle-end inn">title</div>
            <div className="c_head-end tab2">head</div>
            <br/>
            <div className="c_body tab2">body</div>
      
                <div className ="c_script tab3">script  
                <div className="c_type-js inn">type</div>
                <div className="c_plain-text inn tab-1"> =</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>
                    
                    <div className="tab4">
                    <div className="c_this inn">number</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">( [digits] )</div>
                    </div><br/>

                    <div className="tab4"> 
                    {/* srction one)*/}
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num </div>
                    <div className="c_function-js inn">= </div>
                    <div className="c_type-js inn">177.1234</div>
                    <div className="c_plain-text inn">;</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toFixed() is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">());</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 2 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toFixed(6) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">6</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 3 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toFixed(1) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">1</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 4 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"(1.23e+20).toFixed(2) is:"</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">1.23e+20</div>
                    <div className="c_plain-text inn">);</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">2</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 5 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"(1.23e-10).toFixed(2) is:"</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">1.23e-10</div>
                    <div className="c_plain-text inn">);</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toFixed</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">2</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>


                <div className ="c_script-end tab3">script</div>
            <br/>
            <div className="c_body-end tab2">body</div>
        <div className="c_html-end">html</div>
        </pre>
        </exp>

        <br/>
        <p className="tab2">Output</p>
        <exp>
        <pre className="card-light">

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">() is : </div>
        <div className="c_type-js inn">177</div>
        </div>

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">6</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">177.123400</div>
        </div>

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">177.1</div>
        </div>

        <div className="tab4">
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1.23e+20</div>
        <div className="c_plain-text inn">)</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">2</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">123000000000000000000.00</div>
        </div>

        <div className="tab4">
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1.23e-10</div>
        <div className="c_plain-text inn">)</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">2</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">0.00</div>
        </div>


        </pre>
        </exp>
        <br/>

    </div>,


//    JavaScript Number - toLocaleString()
    4: 
    <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript Number - toLocaleString()</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">
        ThThis method converts a <b>number</b> object into a human readable string 
        representing the number using the locale of the environment.
        </element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text">
        <pre>
        <div className="c_this inn">number</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js2 inn">toLocaleString</div>
        <div className="c_plain-text inn">()</div>
        </pre></element></p>
        <br/>

        <p className="tab2">Parameter Details<br/>
        <element className="c_plain_text"><b>digits </b>
         − The number of digits to appear after the decimal point.
        </element></p><br/>

        <p className="tab2">Return value<br/>
        <element className="c_plain_text">
        Returns a human readable string representing the 
        number using the locale of the environment.
        </element></p><br/>

        <p className="tab2">Example</p>

        <exp>
        <pre className="card-light">
        <div className="c_html">html</div>
            <div className="c_head tab2">head</div>
                <div className="c_tittle inn tab3">title</div>
                <div className="c_plain-text inn">JavaScript toLocaleString() Method</div>
                <div className="c_tittle-end inn">title</div>
            <div className="c_head-end tab2">head</div>
            <br/>
            <div className="c_body tab2">body</div>
      
                <div className ="c_script tab3">script  
                <div className="c_type-js inn"> type</div>
                <div className="c_plain-text inn tab-1">=</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    {/* srction one)*/}
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num </div>
                    <div className="c_function-js inn">= </div>
                    <div className="c_var inn">new </div>
                    <div className=".c_number-js inn">Number </div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">177.1234</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_this inn"> num</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">toLocaleString</div>
                    <div className="c_plain-text inn">());</div>
                    </div><br/>



                <div className ="c_script-end tab3">script</div>
            <br/>
            <div className="c_body-end tab2">body</div>
        <div className="c_html-end">html</div>
        </pre>
        </exp>

        <br/>
        <p className="tab2">Output</p>
        <exp>
        <pre className="card-light">
        <div className="tab4">
        <div className="c_type-js inn">177.1234</div>
        </div>


        </pre>
        </exp>
        <br/>

    </div>,

//    JavaScript Number - toPrecision()
    5:
     <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript toPrecision() Method</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">
        This method returns a string representing
         the <b>number</b> object to the specified precision.
        </element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text">
        <pre>
        <div className="c_this inn">number</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toPrecision</div>
        <div className="c_plain-text inn">( [digits] )</div>
        </pre></element></p>
        <br/>

        <p className="tab2">Parameter Details<br/>
        <element className="c_plain_text"><b>precision  </b>
         − An integer specifying the number of significant digits.
        </element></p><br/>

        <p className="tab2">Return value<br/>
        <element className="c_plain_text">
        Returns a string representing a Number object in fixed-point 
        or exponential notation rounded <b>toprecision</b> significant digits.
        </element></p><br/>

        <p className="tab2">Example</p>

        <exp>
        <pre className="card-light">
        <div className="c_html">html</div>
            <div className="c_head tab2">head</div>
                <div className="c_tittle inn tab3">title</div>
                <div className="c_plain-text inn">JavaScript toPrecision() Method</div>
                <div className="c_tittle-end inn">title</div>
            <div className="c_head-end tab2">head</div>
            <br/>
            <div className="c_body tab2">body</div>
      
                <div className ="c_script tab3">script  
                <div className="c_type-js inn">type</div>
                <div className="c_plain-text inn tab-1"> =</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    {/* srction one)*/}
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num </div>
                    <div className="c_function-js inn">= </div>
                    <div className="c_var inn">new </div>
                    <div className=".c_number-js inn">Number </div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">7.123456</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toPrecision() is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toPrecision</div>
                    <div className="c_plain-text inn">());</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 2 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toPrecision(4) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toPrecision</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">4</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                    <div className="tab4">
                    {/* section 3 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toPrecision(2) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toPrecision</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">2</div>
                    <div className="c_plain-text inn">);</div>
                    </div>

                    <div className="tab4">
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"
                    <div className="c_shevron-brack inn">br /</div>
                    "</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>

                     <div className="tab4">
                    {/* section 4 */}
                    <div className="c_this inn">document</div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.toPrecision(1) is : "</div>
                    <div className="c_function-js inn"> + </div>
                    <div className="c_this inn">num</div>
                    <div className="c_plain-text inn">.</div>
                    <div className="c_function-js inn">toPrecision</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_type-js inn">1</div>
                    <div className="c_plain-text inn">);</div>
                    </div><br/>


                <div className ="c_script-end tab3">script</div>
            <br/>
            <div className="c_body-end tab2">body</div>
        <div className="c_html-end">html</div>
        </pre>
        </exp>

        <br/>
        <p className="tab2">Output</p>
        <exp>
        <pre className="card-light">

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">() is : </div>
        <div className="c_type-js inn">177</div>
        </div>

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">6</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">177.123400</div>
        </div>

        <div className="tab4">
        <div className="c_this inn">num</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">177.1</div>
        </div>

        <div className="tab4">
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1.23e+20</div>
        <div className="c_plain-text inn">)</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">2</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">123000000000000000000.00</div>
        </div>

        <div className="tab4">
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">1.23e-10</div>
        <div className="c_plain-text inn">)</div>
        <div className="c_plain-text inn">.</div>
        <div className="c_function-js inn">toFixed</div>
        <div className="c_plain-text inn">(</div>
        <div className="c_type-js inn">2</div>
        <div className="c_plain-text inn">) is : </div>
        <div className="c_type-js inn">0.00</div>
        </div>


        </pre>
        </exp>
        <br/>

    </div>,
    6:'ff',
    7:'ff',
    8:'ff',
    9:'ff',
    10:'ff',
}

export default Card;