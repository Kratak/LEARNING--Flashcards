import React, { Component } from 'react';
import './Card.css'

const Card = {
    
    1: 
    <div className="card">
        <br/>
        <h2 className="c_type-js inn">JavaScript constructor() Method</h2>
        <br/><br/>

        <p className="tab2">Description<br/>
        <element className="c_plain_text">It returns a reference to the Number function 
        that created the instance's prototype.</element></p><br/>

        <p className="card-light tab5">Syntax<br/>
        <element className="c_plain_text"><pre>
        <div className="c_this inn">number </div>
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
                <div className="c_type-js inn">type</div>
                <div className="c_plain-text inn tab-1"> =</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num</div>
                    <div className="c_function-js inn"> =</div>
                    <div className="c_var inn">new </div>
                    <div className="c_number-js inn">Number </div>
                    <div className="c_plain-text inn">(</div> 
                    <div className="c_type-js inn">177.1234</div> 
                    <div className="c_plain-text inn tab1">);</div>
                    </div>


                    <div className="tab4">
                    <div className="c_this inn">document </div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.constructor() is : "</div>
                    <div className="c_function-js inn">+</div>
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
        <div className="c_this inn">num </div>
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
        Its syntax is as follows −
        <pre>
        <div className="c_this inn">number </div>
        <div className="c_plain-text inn tab-2">.</div>
        <div className="c_function-js inn tab0">toExponential</div>
        <div className="c_plain-text inn tab0">( [fractionDigits] )</div>
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
                <div className="c_type-js inn">type</div>
                <div className="c_plain-text inn tab-1"> =</div>
                <div className="c_quote-text-js inn tab0">"text/javascript"</div>
                </div>

                    <div className="tab4"> 
                    <div className="c_var inn">var </div>
                    <div className="c_plain-text inn">num</div>
                    <div className="c_function inn"> =</div>
                    <div className="c_var inn">new </div>
                    <div className="c_number-js inn">Number </div>
                    <div className="c_plain-text inn">(</div> 
                    <div className="c_type-js inn">177.1234</div> 
                    <div className="c_plain-text inn tab1">);</div>
                    </div>


                    <div className="tab4">
                    <div className="c_this inn">document </div>
                    <div className="c_plain-text inn tab-1">.</div>
                    <div className="c_function-js inn tab-0">write</div>
                    <div className="c_plain-text inn">(</div>
                    <div className="c_quote-text-js inn">"num.constructor() is : "</div>
                    <div className="c_function-js inn">+</div>
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
        <div className="c_this inn">num </div>
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
    3: '3.trzeci tekst',
    4: '4.czawrty tekst',
}


export default Card;