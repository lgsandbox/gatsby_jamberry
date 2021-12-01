import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// screen check can delete for production
if(window.screen.availWidth >= 768){console.log("it desktop");} 
else {console.log("it phone")};

class IndexPage extends React.Component {



  render() {
    console.log("rendering...");
    return(
          
 
          <Layout >
            <Seo title="Biggrow Web Solutions" description="Web Design, Development and SEO"/>
          </Layout>
 

      );
     }}

export default IndexPage
