import '../../style/BasicStyle.css'


import styled from 'styled-components'
import tw from 'twin.macro'


const StyledClassement = styled.div`
    ${tw`
        text-xl p-2 flex flex-row justify-between w-full border border-zinc-800 rounded-xl
    `}
`

const StyledXP = styled.div`
    ${tw`
        text-blue-500 
    `}
`

function Classement () {
    return (
        <div className="flex justify-center">
            <div className=" p-2 rounded-md w-screen ml-40 mr-40 mt-16 flex justify-center flex-col items-center">
                <div className="text-2xl poppins-bold mb-16 mt-4">Classement</div>
                <StyledClassement className='bg-yellow-300 text-black'>
  <div>1er : Lucas</div>
  <StyledXP>XP : 240</StyledXP>
</StyledClassement>
<StyledClassement className='bg-zinc-300 text-black'>
  <div>2ème : Clara</div>
  <StyledXP>XP : 200</StyledXP>
</StyledClassement>
<StyledClassement className='bg-amber-600 text-black'>
  <div>3ème : Hugo</div>
  <StyledXP>XP : 180</StyledXP>
</StyledClassement>
<StyledClassement>
  <div>4ème : Emma</div>
  <StyledXP>XP : 160</StyledXP>
</StyledClassement>
<StyledClassement>
  <div>5ème : Léa</div>
  <StyledXP>XP : 140</StyledXP>
</StyledClassement>
<StyledClassement>
  <div>6ème : Maxime</div>
  <StyledXP>XP : 120</StyledXP>
</StyledClassement>
<StyledClassement>
  <div>7ème : Chloé</div>
  <StyledXP>XP : 100</StyledXP>
</StyledClassement>

            </div>
        </div>
    )
}

export default Classement