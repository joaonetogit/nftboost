// Components
import CardNft from "@/components/CardNft";
import Container from "@/components/Container";

// Images
import ImageNft01 from 'public/img-nft/01.jpg'

export default function Home() {
  return (
    <Container>
      <CardNft
        thumbnail={ImageNft01}
        name='Cat #221'
        valueBrl={602.02}
        valueBtc={0.0721}
      />
    </Container>
  )
}
