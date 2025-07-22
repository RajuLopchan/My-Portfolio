import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const skills = [
  { name: "HTML5" },
  { name: "CSS" },
  { name: "MUI" },
  { name: "Tailwind" },
  { name: "Javascript" },
  { name: "Nodejs" },
  { name: "React" },
  { name: "Git" },
  { name: "Github" },
];

const SkillsSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 5, md: 8 },
        px: { xs: 3, sm: 5, md: 10, lg: 15 },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
          padding: 1,
          borderRight:"none",
          borderLeft:""
        }}
      >
        {skills.map((skill, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              whiteSpace: "nowrap",
              px: 2,
              py: 1,
              color: theme.palette.text.secondary
            }}
          >
            {skill.name}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSection;