import React from "react";
import {Image, Text, useMediaQuery,} from "@chakra-ui/react";
// @ts-ignore
import homeBG from "../../assets/img/homeBG.png";
import gymFood from "../../assets/img/gymFood.jpg";
import peopleWorkout from "../../assets/img/peopleWorkout.jpg";

export const HomePage: React.FC = () => {
  const [isLargerThen800] = useMediaQuery("(min-width: 800px)");
  return (
	<div
	  style={{
		backgroundColor: "#0000001c",
		height: "max-content",
		display: "flex",
		flexDirection: "column",
	  }}
	>
	  <div
		style={{
		  display: "flex",
		  flexDirection: isLargerThen800 ? "row" : "column",
		  height: "auto",
		  background: "transparent",
		}}
	  >
		<div
		  style={{
			width: isLargerThen800 ? "50%" : "100%",
			height: !isLargerThen800 && "20vh",
			backgroundColor: "transparent",
			backgroundImage: `url(${homeBG})`,
			backgroundPosition: "98% 5%",
			backgroundRepeat: "no-repeat",
		  }}
		/>
		<div
		  style={{
			display: "flex",
			flexDirection: "column",
			gap: "1.5em",
			background: "#34495E",
			width: isLargerThen800 ? "50%" : "100%",
			padding: isLargerThen800 ? "1.5em" : "1.5em",
		  }}
		>
		  <Text fontSize={"5xl"} as="b" color="white">
			Nutri la tua forza interiore
		  </Text>
		  <Text color="white" style={{marginRight: "30%"}}>
			Sei alla ricerca di alimenti che potenzino il tuo allenamento in
			palestra e accelerino il recupero muscolare?
			<Text as="b">Gym Food</Text> è la soluzione che fa per te! Esplora
			la nostra selezione di alimenti ricchi di proteine, carboidrati
			complessi e grassi sani, appositamente studiati per fornirti
			l'energia di cui hai bisogno.
		  </Text>
		</div>
	  </div>
	  <div>
		<div
		  style={{
			display: "flex",
			flexDirection: isLargerThen800 ? "row" : "column",
			alignItems: "center",
			marginTop: "10%",
		  }}
		>
		  <Image
			src={gymFood}
			objectFit={isLargerThen800 ? "none" : "cover"}
			style={{width: isLargerThen800 ? "33%" : "100%"}}
		  />
		  <div
			style={{
			  display: "flex",
			  flexDirection: "column",
			  gap: "1em",
			  justifyContent: "center",
			  marginTop: !isLargerThen800 && "5%",
			  marginBottom: !isLargerThen800 && "30%",
			  paddingLeft: "1.5em",
			  width: isLargerThen800 ? "30%" : "100%",
			}}
		  >
			<Text>CHI SIAMO</Text>
			<Text
			  fontSize={"4xl"}
			  style={{color: "#436f96", marginRight: "10%"}}
			  as="b"
			>
			  Nutrizione Ottimale per Performance in Palestra
			</Text>
			<Text fontSize={"xl"} style={{marginRight: "30%"}}>
			  Siamo un team di appassionati di fitness e nutrizione, convinti
			  che una dieta equilibrata sia essenziale per raggiungere i tuoi
			  obiettivi fisici. Offriamo soluzioni alimentari di alta qualità,
			  ideali per supportare l'allenamento e il recupero muscolare. Con
			  anni di esperienza, creiamo prodotti nutrienti, deliziosi e
			  convenienti.
			</Text>
		  </div>
		  <Image
			src={peopleWorkout}
			objectFit={isLargerThen800 ? "fill" : "cover"}
			style={{width: isLargerThen800 ? "33%" : "100%"}}
		  />
		</div>
	  </div>
	  <div>
		<div
		  style={{
			display: "flex",
			flexDirection: "column",
			gap: "1em",
			justifyContent: "center",
			marginTop: "5%",
			paddingLeft: "1.5em",
			width: isLargerThen800 ? "30%" : "100%",
		  }}
		>
		  {/*<Text>SERVIZI</Text>*/}
		  {/*<Text*/}
		  {/*  fontSize={"4xl"}*/}
		  {/*  style={{ color: "#436f96", marginRight: "10%" }}*/}
		  {/*  as="b"*/}
		  {/*>*/}
		  {/*  Professionali nell'Alimentazioni Sportiva*/}
		  {/*</Text>*/}
		</div>
	  </div>
	</div>
  );
};
