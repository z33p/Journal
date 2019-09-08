import React, { Component } from 'react';


class About extends Component {
    // state = {  }
    render() {
        return (
            <main className="h-screen-85 text-center bg-gray-800 text-white">
                <article className="bg-gray-700">
                    <section className="bg-gray-800 text-left">
                        <h1 className="text-4xl font-bold p-4 ml-4">About Page</h1>
                        <div className="inline-block pl-10 md:pl-16 w-11/12 md:w-4/5 text-lg">
                            <p>
                                A journal, from the Old French "journal" (meaning "daily"), may refer to several things. In its original meaning, it refers to a daily record of activities, but the term has evolved to mean any record of activities, regardless of time elapsed between entries, such as a
                            </p>
                            <ul className="pl-8 list-disc">
                                <li>
                                    <strong>Diary</strong>, a record of what happened over the course of a day or other period
                            </li>
                                <li>
                                    <strong>Daybook</strong>, also known as general journal, a daily record of financial transactions
                                    </li>
                                <li>
                                    <strong>Logbook</strong>, a record of events important to the operation of a vehicle, facility, or otherwise
                            </li>
                                <li>
                                    <strong>Transaction journal</strong>, a chronological record of data processing
                            </li>
                            </ul>

                            <p className="pt-4">In publishing, it can also refer to various periodicals or serials:</p>
                            <ul className="pl-8 mb-4 list-disc">

                                <li>
                                    <strong>Academic journal</strong>, a generic term referring to academic and scholarly periodicals in general
                            </li>
                                <ul className="pl-8 list-disc">
                                    <li>
                                        <strong>Scientific journal</strong>, an academic journal focusing on science
                                </li>
                                    <li>
                                        <strong>Medical journal</strong>, an academic journal focusing on medicine
                                </li>
                                </ul>
                                <li>
                                    <strong>Magazine</strong>, a generic catch-all term referring to non-academic or scholarly periodicals in general
                            </li>
                                <ul className="pl-8 list-disc">
                                    <li>
                                        <strong>Trade magazine</strong>, a magazine of interest to those of a particular profession or trade
                                </li>
                                    <li>
                                        <strong>Literary magazine</strong>, a magazine devoted to literature in a broad sense
                                </li>
                                </ul>
                                <li>
                                    <strong>Newspaper</strong>, a periodical covering general news and current events in politics, business, sports and art
                            </li>
                                <li>
                                    <strong>Gazette</strong>, a type of newspaper, often a newspaper of record
                            </li>
                                <li>
                                    <strong>Government gazette</strong>, a government newspaper which publishes public or legal notices
                            </li>
                            </ul>

                        </div>
                        <p className="p-2 md:mr-8 text-black text-lg md:text-xl text-bold md:text-right">
                            <span>Font: </span>
                            <a className="text-blue hover:underline" href="https://en.wikipedia.org/wiki/Journal">https://en.wikipedia.org/wiki/Journal</a>
                        </p>
                    </section>

                    <section className="mt-8 bg-gray-800">
                        <h1 className="text-lg md:text-4xl text-left p-4 ml-4">Written by Raphael Fellipe (z33p)</h1>
                    </section>
                </article>
            </main>
        );
    }
}


export default About;