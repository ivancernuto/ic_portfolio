import React from 'react';
import styled from 'styled-components';

export default function LandingType () {

    const OrganicGrid = styled.div`


        .glitchI, .glitchV, .glitchA, .glitchN, 
        .glitchC, .glitchE, .glitchR, .glitchN, 
        .glitchU, .glitchT, .glitchO, .glitch {
            font-size: 8rem;
            color: hsl(37.7, 100%, 91.6%);
            align-self: center;
            transition: font-size 1.3s ;  
            margin: 0 0 0 0;
        }

        .container {
            width: 100vw;
            height: 90vh;
            display: flex;
            flex-direction: column;
            gap: 1px;   
        }

        .row {
            display: flex;
            flex-direction: row;
            gap: 1px;
        }

        .grid-element {  
            display: flex;
            justify-content: center;
            border: 1px solid hsl(37.7, 100%, 91.6%);
        }

        .skills {
            flex-direction: row;
            align-self: center;
            padding-left: 0;
            
        }

        .h1 {
            font-size: 2rem;
            color: hsl(37.7, 100%, 91.6%)!important;
            
        }

        .grid-element:hover {
            animation-name: example;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }

        .row,
        .grid-element {
            flex: 1;
            /* add transitions for smooth change of the grid */
            /* play around with transition time */
            -webkit-transition: flex 1s ease-out;
            -moz-transition: flex 1s ease-out;
            -ms-transition: flex 1s ease-out;
            -o-transition: flex 1s ease-out;
            transition: flex 1s ease-out;  
        }

        
        .grid-element:hover { 
            flex: 2;

            .glitchI, .glitchV, .glitchA, .glitchN, 
            .glitchC, .glitchE, .glitchR, .glitchN, 
            .glitchU, .glitchT, .glitchO, .glitch {
                /*
                animation-name: textSize;
                animation-duration: 2s;
                animation-iteration-count: infinite;  
                */
                font-size: 16rem;
                margin: 0 0 0 0;
                    
            }

            .glitchI {
                animation-name: glitchingI;
                animation-duration: 8s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingI {
                        0% {rotate: 0deg;}
                        
                        50% {rotate: 180deg;}  
                    
                        100% {rotate: 360deg;}
                    }
            }

            .glitchV {
                animation-name: glitchingV;
                animation-duration: 8s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingV {
                        0% {transform: skewY(0rad);}
                        
                        50% {transform: skewY(3.60rad);}  
                    
                        100% {transform: skewY(0rad);}
                    }
            }

            .glitchA {
                animation-name: glitchingA;
                animation-duration: 8s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingA {
                        0% {transform: skew(30deg, 0deg);}
                        
                        50% {transform: skew(-30deg, 0deg);}  
                    
                        100% {transform: skew(30deg, 0deg);}
                    }
            }

            .glitchN {
                animation-name: glitchingN;
                animation-duration: 6s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingN {
                        0% {transform: scaleY(0);}
                        
                        50% {transform: scaleY(1.5);}  
                    
                        100% {transform: scaleY(0);}
                    }
            }

            .glitchC {
                animation-name: glitchingC;
                animation-duration: 8s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingC {
                        0% {transform: skewX(0deg);}
                        
                        50% {transform: skewX(220deg);}  
                    
                        100% {transform: skewX(30deg);}
                    }
            }

            .glitchE {
                animation-name: glitchingE;
                animation-duration: 5s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingE {
                        0% {
                            font-style: normal;
                            
                        }

                        25% {
                            font-style: italic;
                            
                        }
                        
                        50% {
                            font-style: normal;
                           
                        } 
                        
                        70% {
                            font-style: normal;
                           
                        }

                        80% {
                            font-style: italic;
                            
                        }

                        85% {
                            font-style: normal;
                           
                        }
                    
                        100% {
                            font-style: italic;
                            
                        }
                    }
            }

            .glitchR {
                animation-name: glitchingR;
                animation-duration: 3s;
                animation-iteration-count: infinite; 
                                  
                    @keyframes glitchingR {
                        0% { 
                            
                            -webkit-text-stroke: 3px black;
                            
                        }

                        

                        39% { 
                           
                            -webkit-text-stroke: 3px black;
                            transform: skew(0deg, 0deg);
                            
                        }

                        60% {
                    
                            
                            -webkit-text-stroke: 3px black;
                            transform: skew(30deg, 0deg);
                        }

                        68% {
                            
                            
                            -webkit-text-stroke: 3px black;
                            transform: skew(-30deg, 0deg);
                        }

                        76% {
                            
                            -webkit-text-stroke: 3px black;
                            transform: skew(30deg, 0deg);
                        }

                        100% {

                        }

                        
                        
                        
                    }
            }

            .glitchU {
                animation-name: glitchingU;
                padding: 3rem;
                animation-duration: 3s;
                animation-iteration-count: infinite; 
                background-attachment: fixed;
                background-image:  
                repeating-radial-gradient( circle at 0 0, transparent 0, #fff0d6 4px ), 
                repeating-linear-gradient( #e4c68d55, #e4c68d );
                    @keyframes glitchingU {
                     
                        
                        10% {
                            font-style: italic;
                            background-color: #fff0d6;
                            opacity: 0.8;
                            background-image:  linear-gradient(135deg, #e4c68d55 25%, transparent 25%), 
                            linear-gradient(225deg, #e4c68d55 25%, transparent 25%), 
                            linear-gradient(45deg, #e4c68d55 25%, transparent 25%), 
                            linear-gradient(315deg, #e4c68d55 25%, #e4c68d55 25%);
                            background-position:  10px 0, 10px 0, 0 0, 0 0;
                            background-size: 10px 10px;
                            background-repeat: repeat;
                        }

                        20% {
                            font-style: normal;
                            background-color: #fff0d6;
                            opacity: 0.8;
                            background-image: 
                            radial-gradient( ellipse farthest-corner at 10px 10px , #e4c68d55, #e4c68d55 50%, #e4c68d55 50%);
                            background-size: 10px 10px;
                        }

                        30% {
                            
                            background-color: #e4c68d55;
                            opacity: 0.8;
                            background-image:  
                            linear-gradient(135deg, #e4c68d55 25%, transparent 25%), 
                            linear-gradient(225deg, #e4c68d55 25%, transparent 25%),
                            linear-gradient(45deg, #e4c68d55 25%, transparent 25%), 
                            linear-gradient(315deg, #e4c68d55 25%, #e4c68d55 25%);
                            background-position:  10px 0, 10px 0, 0 0, 0 0;
                            background-size: 10px 10px;
                            background-repeat: repeat;
                        }

                        40% {
                            font-style: italic;
                            background-color: #fff0d6;
                            opacity: 0.8;
                            background-size: 10px 10px;
                            background-image: repeating-linear-gradient(45deg, #e4c68d55 0, #e4c68d55 1px, #fff0d6 0, #fff0d6 50%);
                        }

                       

                        90% {
                            

                        }


                        


                    }
            }

            .glitchT {
                animation-name: glitchingT;
                animation-duration: 2s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingT {
                        0% {transform: translateX(10px) rotate(10deg) translateY(5px);}
                        
                        50% {transform: translateX(30px) rotate(30deg) translateY(25px);}  
                    
                        100% {transform: translateX(10px) rotate(10deg) translateY(5px);}
                    }
            }

            .glitchO {
                animation-name: glitchingO;
                animation-duration: 5s;
                animation-iteration-count: infinite; 
                    @keyframes glitchingO {
                        0% {transform: scaleX(0);}
                        
                        50% {transform: scaleX(1.8);}  
                    
                        100% {transform: scaleX(0);;}
                    }
            }
                
        }

        @media (max-width: 1000px){  
            .glitchI, .glitchV, .glitchA, .glitchN, 
            .glitchC, .glitchE, .glitchR, .glitchN, 
            .glitchU, .glitchT, .glitchO, .glitch {
                font-size: 5rem;
                color: hsl(37.7, 100%, 91.6%);
                align-self: center;
                transition: font-size 1.3s ;  
                margin: 0 0 0 0;
            }

            ul {
                display: grid;
                h1 {
                    font-size: 1rem!important;
                    text-align: center;
                    justify-self: center;
                }
            }  
            
            .grid-element:hover { 
            flex: 2;

            .glitchI, .glitchV, .glitchA, .glitchN, 
            .glitchC, .glitchE, .glitchR, .glitchN, 
            .glitchU, .glitchT, .glitchO, .glitch {
                /*
                animation-name: textSize;
                animation-duration: 2s;
                animation-iteration-count: infinite;  
                */
                font-size: 8rem;
                margin: 0 0 0 0;
                    
            }
        }

        @media (max-width: 500px){  
                ul {
                    display: grid;
                    justify-content: center;
                    h1 {
                font-size: 0.8rem!important;
                
                }
                }


                
           
            
            
        
        }

    `;


    return (
        <OrganicGrid>
            <div class="container">
  
  
                <div class="row">
                    <div class="grid-element"><p class="glitchI">I</p></div>
                    <div class="grid-element"><p class="glitchV">V</p></div>
                    <div class="grid-element"><p class="glitchA">A</p></div>
                    <div class="grid-element"><p class="glitchN">N</p></div>        
                </div>

 
                <div class="row">
                    <div class="grid-element"><p class="glitchC">C</p></div>
                    <div class="grid-element"><p class="glitchE">E</p></div>
                    <div class="grid-element"><p class="glitchR">R</p></div>
                    <div class="grid-element"><p class="glitchN">N</p></div>     
                </div>  

                <div class="row">
                    <div class="grid-element"><p class="glitchU">U</p></div>
                    <div class="grid-element"><p class="glitchT">T</p></div>
                    <div class="grid-element"><p class="glitchO">O</p></div>
                    <div class="grid-element">
                        <ul class="skills">
                            <h1>WEB DESIGN </h1>
                            <h1>WEB DEVELOPMENT </h1>
                            <h1>GRAPHIC DESIGN</h1>
                        </ul>
                    </div>       
                </div>  
             

            </div>
            
        </OrganicGrid>
    )
}