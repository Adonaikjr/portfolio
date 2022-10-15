
import { Cards } from "../../components/Card";
import { Input } from "../../components/Input";
import { ContainerApp, Section, Content } from "./styled";

export function App() {

  return (
    <ContainerApp>
      <Content>

        <Section>
          <h2>About Us</h2>
          <p>In this blog we present several topics in the area of ​​electronic Engineering and curiosities. Do you want technical information from a company that has experience in the area?
            Check here!</p>
        </Section>
        <Input />
        <Cards title='Interserver.net' text='As a leading webhosting provider, InterServer can provide its extensive customer base with innovative products and services designed to enhance their existing businesses. We service customers ranging from individual freelancers to Fortune 500 companies, both domestic and international. InterServer takes tremendous pride in our commitment to ensure security, reliability, and technical expertise for each customer. We are one of the few service providers that offer around-the-clock customer support with live representatives available 24/7.' />
        <Cards title='Interserver.net' text='As a leading webhosting provider, InterServer can provide its extensive customer base with innovative products and services designed to enhance their existing businesses. We service customers ranging from individual freelancers to Fortune 500 companies, both domestic and international. InterServer takes tremendous pride in our commitment to ensure security, reliability, and technical expertise for each customer. We are one of the few service providers that offer around-the-clock customer support with live representatives available 24/7.' />
        <Cards title='Interserver.net' text='As a leading webhosting provider, InterServer can provide its extensive customer base with innovative products and services designed to enhance their existing businesses. We service customers ranging from individual freelancers to Fortune 500 companies, both domestic and international. InterServer takes tremendous pride in our commitment to ensure security, reliability, and technical expertise for each customer. We are one of the few service providers that offer around-the-clock customer support with live representatives available 24/7.' />
        <Cards title='Interserver.net' text='As a leading webhosting provider, InterServer can provide its extensive customer base with innovative products and services designed to enhance their existing businesses. We service customers ranging from individual freelancers to Fortune 500 companies, both domestic and international. InterServer takes tremendous pride in our commitment to ensure security, reliability, and technical expertise for each customer. We are one of the few service providers that offer around-the-clock customer support with live representatives available 24/7.' />
      </Content>
    </ContainerApp>
  )
}

