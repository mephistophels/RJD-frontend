import {Container} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {Header} from "./Header/Header";
import { Footer } from "./Footer/Footer";


export function Wrapper() {
    return (
        <>
            <Header/>
            <br/><br/><br/><br/>
            <Container size='lg' style={{
                minHeight: '70vh',
            }}>
                <Outlet/>
            </Container>
            <Footer />
        </>
    );
}