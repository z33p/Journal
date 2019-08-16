import React, { Component } from 'react';


function About() { 
    return (
        <div className="About">
            <div className="container">
                <article className="fisrt-article">
                        <div>
                            <h1>About Page</h1>
                            
                            <p>
                            A journal, from the Old French "journal" (meaning "daily"), may refer to several things.
                            In its original meaning, it refers to a daily record of activities,
                            but the term has evolved to mean any record of activities, regardless of time elapsed between entries,
                            such as a
                            </p>
                            <ul>
                                <li><strong>Diary</strong>, a record of what happened over the course of a day or other period</li>
                                <li><strong>Daybook</strong>, also known as general journal, a daily record of financial transactions</li>
                                <li><strong>Logbook</strong>, a record of events important to the operation of a vehicle, facility, or otherwise</li>
                                <li><strong>Transaction journal</strong>, a chronological record of data processing</li>
                            </ul>
                            <p>In publishing, it can also refer to various periodicals or serials:</p>
                            <ul>
                                <li><strong>Academic journal</strong>, a generic term referring to academic and scholarly periodicals in general</li>
                                <ul>
                                    <li><strong>Scientific journal</strong>, an academic journal focusing on science</li>
                                    <li><strong>Medical journal</strong>, an academic journal focusing on medicine</li>
                                </ul>
                                <li><strong>Magazine</strong>, a generic catch-all term referring to non-academic or scholarly periodicals in general</li>
                                <ul>
                                    <li><strong>Trade magazine</strong>, a magazine of interest to those of a particular profession or trade</li>
                                    <li><strong>Literary magazine</strong>, a magazine devoted to literature in a broad sense</li>
                                </ul>
                                <li><strong>Newspaper</strong>, a periodical covering general news and current events in politics, business, sports and art</li>
                                <li><strong>Gazette</strong>, a type of newspaper, often a newspaper of record</li>
                                <li><strong>Government gazette</strong>, a government newspaper which publishes public or legal notices</li>
                            </ul>
                            <p>font: <a href="https://en.wikipedia.org/wiki/Journal">https://en.wikipedia.org/wiki/Journal</a></p>
                        </div>
                </article>

                <article className="last-article">
                        <div>
                            <h1>Writen by</h1>
                        </div>
                </article>
            </div>
            
        </div>
    );
}

 
export default About;