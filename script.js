const text = `It’s kind of funny how some people can just brighten up a space without even trying. You’re probably not even aware of it, but the way you talk, smile, or even just go live, it has this effect. 

I’ve watched some of your live videos, and I don’t know… there’s just something about them that makes me smile. Maybe it’s the way you carry yourself, or how natural you are with people. 

And honestly, day by day, I find myself becoming more curious. I don’t even know exactly when it started, but I just hope I get the chance to know you more somehow. No pressure, just a quiet little wish from someone who's been quietly noticing.

Sincerely,
Patrick`;

const messageElement = document.getElementById('message');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    messageElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();