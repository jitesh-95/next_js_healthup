'use client'

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useThemeMode } from './ThemeContext';
import { useRouter } from 'next/navigation';
import styles from '../styles/home.module.css';


const HeroSection = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/custom-recipe'); // ✅ Use '/' if Custom Recipe is the homepage
  };

  return (
    <Box className={styles.heroWrapper}>
      <Box className={styles.heroImageWrapper}>
        <Image
          width={1920}
          height={1080}
          src="/images/hero.png"
          alt="Hero Illustration"
          className={styles.heroImage}
        />
      </Box>

      {/* Content */}
      <Box className={styles.heroContent}>
        <Typography variant="h2" fontWeight={700} sx={{
          mb: 3,
          fontSize: {
            xs: '1.3rem',   // mobile
            sm: '2.2rem', // small tablets
            md: '3.5rem', // medium devices
            lg: '4rem',   // large screens
          },
        }}>
          Empower Your Health Journey
        </Typography>
        <Typography variant="h6" sx={{
          mb: 4,
          fontSize: {
            xs: '0.8rem',
            sm: '1rem',
            md: '1.25rem',
          },
        }}>
          Discover custom meal plans and structured routines built just for you.
        </Typography>
        <Button
          variant="contained"
          color='primary'
          onClick={handleNavigate}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  )
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Personalized Recipes',
      description:
        'Get custom-tailored recipes based on your dietary preferences, goals, and restrictions. Whether you’re keto, vegan, or gluten-free, HealthUP helps you cook smarter and eat healthier every day.',
      image: '/images/personalised.svg',
      alt: 'Custom recipes for your health',
    },
    {
      title: 'Weekly Meal Planner',
      description:
        'Plan your week in advance with a balanced and nutritious meal schedule. Save time, reduce stress, and avoid decision fatigue by having your meals mapped out with variety and health in mind.',
      image: '/images/weekly-planning.svg',
      alt: 'Weekly planner interface',
    },
    {
      title: 'Goal-Based Meal Planning',
      description:
        'Set your personal goals — weight loss, muscle gain, or maintenance — and get meal plans designed to help you reach them faster.',
      image: '/images/goal.svg',
      alt: 'Goal based planning UI',
    },
    {
      title: 'Nutrient Insights',
      description:
        'Understand what you eat. Each recipe comes with detailed nutritional insights including calories, macros, and essential vitamins, so you can track and optimize your health journey with confidence.',
      image: '/images/nutrient-analysis.svg',
      alt: 'Nutrition info interface',
    },
    {
      title: 'Smart Grocery List',
      description:
        "Download your grocery list as PDF automatically from weekly planning's meal plan, so you buy exactly what you need.",
      image: '/images/grocery-list.svg',
      alt: 'Grocery list feature',
    },
    {
      title: 'Dietary & Health Filters',
      description:
        'Exclude ingredients like gluten, dairy, or nuts to suit your dietary restrictions, allergy concerns or any medical conditions.',
      image: '/images/dietry-health.svg',
      alt: 'Allergy and dietary filters UI',
    },
  ];


  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight={600}
        sx={{
          fontSize: {
            xs: '2rem',   // mobile
            sm: '2.2rem', // small tablets
            md: '3.5rem', // medium devices
          },
        }}>
        Key Features
      </Typography>
      <Divider sx={{ mb: 4, mx: { xs: 2, sm: 8, md: 6 } }} />
      <Grid container columnSpacing={6} rowSpacing={10} justifyContent="center">
        {features.map(({ title, description, image, alt }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Box sx={{ textAlign: 'center', px: 2 }}>
              <Image
                src={image}
                alt={alt}
                width={300}
                height={300}
                style={{ objectFit: 'contain' }}
              />
              <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: 300 }}>{description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

function AboutSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom fontWeight={600}
          sx={{
            fontSize: {
              xs: '2rem',   // mobile
              sm: '2.2rem', // small tablets
              md: '3.5rem', // medium devices
            },
          }}>
          About HealthUP
        </Typography>
        <Divider sx={{ mb: 2, mx: { xs: 0, sm: 5, md: 10 } }} />
        <Typography variant="body1" align="center" sx={{ maxWidth: 700, mx: 'auto' }}>
          HealthUp is your personal health companion. Whether you're building a diet plan or looking to manage your weekly meals, HealthUP offers tools to track your journey, discover healthy recipes, and stay on top of your wellness goals.
        </Typography>
      </Container>
    </Box>
  );
}

const Home = () => {
  const { darkMode } = useThemeMode();
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? 'background.default' : '#fff',
        color: darkMode ? 'text.primary' : 'text.secondary',
        transition: 'all 0.3s ease',
      }}
    >
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </Box>
  )
}

export default Home
