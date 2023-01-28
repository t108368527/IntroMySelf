import Head from 'next/head';
import styles from '@/styles/Degree.module.css';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import React from 'react';

const steps = ['High School', 'College', 'Master'];

function Degree () {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    }

    const isStepSkipped = (step: number) => {
        return skipped.has(step)
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if(isStepSkipped(activeStep)){
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Head>
                <title>Degree</title>
                <meta name="description" content="Generated My Degree" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{width:'100%'}} className={styles.body}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean} ={};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps} color="#FFF">
                                <StepLabel {...labelProps} color="#FFF">{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
        </>
    )
}

export default Degree