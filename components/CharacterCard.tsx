import { Character } from "@/types";
import {
  Box,
  styled,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grow,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
type Props = {
  CharacterData: Character;
  allowDetailAccess: boolean;
};

const MainContainer = styled(Card)({
  width: 345,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  borderRadius: 15,
  backgroundColor: "transparent",
  position: "relative",
});

export default function CharacterCard({
  CharacterData,
  allowDetailAccess,
}: Props) {
  return (
    <MainContainer>
      {CharacterData.isFavorite && (
        <Grow in={true}>
          <FavoriteIcon className="favorite-icon" fontSize="inherit" />
        </Grow>
      )}
      <CardMedia
        sx={{ height: 250, backgroundSize: "cover" }}
        image={CharacterData.image}
        title={CharacterData.name}
      />
      <CardContent
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Typography gutterBottom variant="h6" component="div" fontWeight={600}>
          {CharacterData.name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          fontWeight={600}
        >
          {CharacterData.gender}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          fontWeight={600}
        >
          {CharacterData.species}
        </Typography>
        <br />
        {allowDetailAccess && (
          <Box display="flex" justifyContent="center">
            <Link href={`/${CharacterData.id}`} className="button-action">
              Info
            </Link>
          </Box>
        )}
      </CardContent>
    </MainContainer>
  );
}
