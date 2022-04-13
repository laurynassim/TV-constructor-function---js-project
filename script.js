const createTvBrand = document.getElementById('createTvBrand')
const tvInputName = document.getElementById('inputText')
//sita zemiau sukuria funkcija, htmle dar neturiu
// const displayTvBrand = document.getElementById('displayTvBrand')




class MyTv {
    constructor(tv){
        this.tv = tv

        this.createTv()
    }

    createTv(){
            let body = document.getElementsByTagName("Body")[0]

            let outerBox = document.createElement('div')
                outerBox.setAttribute('id', 'outerBox' )
                body.appendChild(outerBox)

            let displayTvBrand = document.createElement('div')
                displayTvBrand.setAttribute('id', 'displayTvBrand')
                displayTvBrand.innerHTML = tvInputName.textContent 
                outerBox.appendChild(displayTvBrand)

            let screen = document.createElement('div')
                screen.setAttribute('id', 'screen')
                outerBox.appendChild(screen)

            let controls = document.createElement('div')
                controls.setAttribute('id', 'controls')
                outerBox.appendChild(controls)

            let channel = document.createElement('div')
                channel.setAttribute('id', 'channel')
                controls.appendChild(channel)

            let p1 = document.createElement('p')
                p1.textContent = 'channel'
                channel.appendChild(p1)

            let showChannel = document.createElement('div')
                showChannel.setAttribute('id', 'showChannel')
                channel.appendChild(showChannel)

            let inputNextChannel = document.createElement('input')
                inputNextChannel.setAttribute('type', 'button')
                inputNextChannel.setAttribute('id', 'nextChannel')
                inputNextChannel.setAttribute('value', 'next')
                channel.appendChild(inputNextChannel)

            let inputPreviousChannel = document.createElement('input')
                inputPreviousChannel.setAttribute('type', 'button')
                inputPreviousChannel.setAttribute('id', 'previousChannel')
                inputPreviousChannel.setAttribute('value', 'previous')
                channel.appendChild(inputPreviousChannel)
            
            let volume = document.createElement('div')
                volume.setAttribute('id', 'volume')
                controls.appendChild(volume)

            let inputVolumeDown = document.createElement('input')
                inputVolumeDown.setAttribute('type', 'button')    
                inputVolumeDown.setAttribute('id', 'volumeDown')    
                inputVolumeDown.setAttribute('value', 'V-')
                volume.appendChild(inputVolumeDown)

            let inputVolumeUp = document.createElement('input')
                inputVolumeUp.setAttribute('type', 'button')
                inputVolumeUp.setAttribute('id', 'volumeUp')
                inputVolumeUp.setAttribute('value', 'V+')
                volume.appendChild(inputVolumeUp)
            
            let reset = document.createElement('div')
                reset.setAttribute('div', 'reset')
                controls.appendChild(reset)
                
                
            let wrapper = document.createElement('div')
                wrapper.setAttribute('class', 'wrapper')
                reset.appendChild(wrapper)
                
            let inputResetButton = document.createElement('input')
                inputResetButton.setAttribute('type', 'button')
                inputResetButton.setAttribute('id', 'resetButton')
                inputResetButton.setAttribute('value', 'Magic reset')
                wrapper.appendChild(inputResetButton)

    }


}


createTvBrand.addEventListener('click', function() {
 new MyTv(tvInputName.value)

 tvInputName.value = ''
})