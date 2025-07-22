import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x200",
    description: "A personal portfolio built with React and Material UI to showcase my skills and projects.",
  },
  {
    title: "E-commerce Store",
    image: "https://via.placeholder.com/400x200",
    description: "A full-stack MERN e-commerce app with cart, admin dashboard, and payment integration.",
  },
  {
    title: "EV Connect Nepal",
    image: "https://via.placeholder.com/400x200",
    description: "EV charging station detection and booking system with Google Maps integration.",
  },
  {
    title: "AI Chatbot",
    image: "https://via.placeholder.com/400x200",
    description: "A chatbot built using OpenAI GPT API for dynamic conversations and data queries.",
  },
];

const ProjectsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
        py: { xs: 5, md: 10 },
        px: { xs: 3, sm: 5, md: 10, lg: 15 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{xs: 12, sm: 6, md: 3}} key={index}>
            <Card
              sx={{
                backgroundColor: "#1f2937",
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="#d1d5db">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    color: "#ff4c29",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { color: "#e63d17" },
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
