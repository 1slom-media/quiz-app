import { ErrorMessage, Header } from "../../components";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Categories from "../../data/Categories";
import{
    Grid,
    Select,
    MenuItem,
    TextField,
    Container,
    InputLabel,
    FormControl,
} from '@mui/material';
import './home.scss';

export const Home=({ amount,fetchQuestions,setAmount })=>{
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);

    const navigate=useNavigate();

    const handleSubmit = () => {
        if (!category || !amount) {
          setError(true);
          return;
        } else {
          setError(false);
          fetchQuestions(category);
          navigate("/quiz");
        }
      };

    return (
        <div className="home">
            <Header/>
            <Container>
                <div className="home__paper">
                    <h1  className="home__title">
                        Get Questions:
                    </h1>
                    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="category-select-label">
                                Select category:
                            </InputLabel>
                            <Select
                                required
                                name="category"
                                value={category}
                                id="category-select"
                                label="Select category"
                                labelId="category-select-label"
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                {Categories.map((cat) => (
                                    <MenuItem key={cat.category} value={cat.value}>
                                        {cat.category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            inputProps={{ min: 1, max: 20 }}
                            required
                            fullWidth
                            type="number"
                            id="quiz-number"
                            variant="outlined"
                            name="quiz-number"
                            label={`Add a quiz number from 1 to 20`}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        </Grid>
                    </Grid>
                    <button className='home__btn'>
                        Submit
                    </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}