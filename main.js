
gsap.registerPlugin(MorphSVGPlugin);

const a = gsap.to('#line-1', {
    duration: 5,
    repeat: -1,
    morphSVG: "#line-2",
    yoyo: true,
    ease: 'linear',
    attr: {
        stroke: '#D258C5'
    }
})

gsap.to('#Ellipse1-1', {
    duration: 5,
    repeat: -1,
    morphSVG: 'M201 93.999C201 109.494 199.776 128.113 192.5 140.999C184.218 155.666 167.5 165.499 148.5 168.499C132.412 177.99 118.581 187.999 97.9996 187.999C77.9869 187.999 63.8076 177.512 48 168.499C31.2558 158.952 13.2337 150.414 4.76357 133.999C-1.49926 121.862 1 108.304 1 93.999C1 70.4828 4.46188 48.9834 20.1013 32.499C29.9084 22.162 48.1449 22.6527 62 16.999C74.8267 11.765 83.0406 -0.000976562 97.9996 -0.000976562C118.012 -0.000976562 135.692 7.98583 151.5 16.999C165.267 24.8487 165.606 35.806 174 48.499C183.363 62.6587 201 76.2547 201 93.999Z',
    yoyo: true,
    ease: 'linear'
})
