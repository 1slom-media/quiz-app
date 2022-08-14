import './result.scss';
import { Button } from "@mui/material";
import { Header } from '../../components';

export const Result =({score})=>{
    return (
        <>
        <Header/>
        <div className="result">
            <span className="result__title">Final Score : {score}</span>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
            >
            Go to homepage
            </Button>
        </div>
        </>
    )
}