import React from 'react'
import Copyright from './copyright'
import Newsletter from './newsletter'
import SocialContent from './socialContent'

export default function Footer(props) {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <SocialContent/>
                <Newsletter/>
                <section className="">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Copyright/>
        </footer>
    )
}
