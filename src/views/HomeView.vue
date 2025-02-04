<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const messages = ref<Array<{ text: string; from: 'user' | 'eliza' }>>([]);
const inputText = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

const sendMessage = async () => {
  const text = inputText.value.trim();
  if (!text) return;

  // Add user message
  messages.value.push({ text, from: 'user' });
  inputText.value = '';

  try {
    // Simulate Eliza typing indicator
    messages.value.push({ text: '...', from: 'eliza' });
    
    // Send to ElizaOS API
    const response = await fetch('https://your-eliza-api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    
    // Remove typing indicator and add actual response
    messages.value.pop();
    messages.value.push({ text: data.reply, from: 'eliza' });

  } catch (error) {
    console.error('Error:', error);
    messages.value.pop();
    messages.value.push({ 
      text: 'Sorry, the AI is currently unavailable. Please try again later.',
      from: 'eliza'
    });
  }

  // Auto-scroll to bottom
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};
</script>

<template>
	<div class="k-container">
		<section class="hero-section">
			<div class="hero-text">
				<h1>First AI Agent for Liquidity Optimization</h1>
				<span>Fully autonomous, sovereign and on-chain.</span>
			</div>
			<img src="@/assets/img/kraken.png" alt="kraken" class="image-card" />
		</section>
		<section class="token-liquidity-section">
			<h2>Unrugable Token Liquidity</h2>
			<p>
				$KRK is the first token with unrugable liquidity managed by AI. <br /><br />
				The liquidity pool is protected by a sovereign AI Agent that optimizes liquidity positions based on real
				time market data.
			</p>
			<k-button outlined> Get $KRK </k-button>
		</section>
		<section class="challenge-section">
			<img src="@/assets/img/chest.png" alt="kraken" class="image-card" />

			<div class="challenge-section-body">
				<h2>Challenge the AI</h2>
				<p>
					KrAIken is a <u>DeFAI</u> Protocol in open beta.<br /><br />
					Everyone is invited to train the AI by trading and challenge it's liquidity positions.
				</p>
				<k-button> Read Docs </k-button>
			</div>
		</section>
        <div class="chat-widget">
          <div class="chat-header">
            <h3>AI Support</h3>
            <div class="status-indicator"></div>
          </div>
          <div ref="messagesContainer" class="chat-messages">
            <div 
              v-for="(msg, index) in messages" 
              :key="index" 
              :class="['message-bubble', msg.from]"
            >
              <div class="message-content">
                {{ msg.text }}
              </div>
            </div>
          </div>
          <div class="chat-input">
            <input 
              v-model="inputText" 
              @keyup.enter="sendMessage" 
              placeholder="Ask me anything..."
              class="message-input"
            />
            <button @click="sendMessage" class="send-button">
              Send
            </button>
          </div>
        </div>
	</div>
</template>


<style lang="sass">
.chat-widget
  position: fixed
  bottom: 20px
  right: 20px
  width: 320px
  background: #ffffff
  border-radius: 12px
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15)
  z-index: 1000
  font-family: inherit

.chat-header
  padding: 16px
  background: #3B82F6
  border-radius: 12px 12px 0 0
  color: white
  display: flex
  align-items: center
  gap: 8px

  h3
    margin: 0
    font-weight: 600

  .status-indicator
    width: 8px
    height: 8px
    background: #10B981
    border-radius: 50%

.chat-messages
  height: 300px
  padding: 16px
  overflow-y: auto
  background: #f8fafc

.message-bubble
  margin-bottom: 12px
  display: flex

  &.user
    justify-content: flex-end
    .message-content
      background: #3B82F6
      color: white

  &.eliza
    justify-content: flex-start
    .message-content
      background: #e2e8f0
      color: #1e293b

.message-content
  max-width: 80%
  padding: 12px 16px
  border-radius: 16px
  font-size: 14px
  line-height: 1.4
  word-break: break-word

.chat-input
  display: flex
  gap: 8px
  padding: 16px
  border-top: 1px solid #e2e8f0

.message-input
  flex: 1
  padding: 8px 12px
  border: 1px solid #e2e8f0
  border-radius: 8px
  font-size: 14px
  &:focus
    outline: none
    border-color: #3B82F6
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2)

.send-button
  padding: 8px 16px
  background: #3B82F6
  color: white
  border: none
  border-radius: 8px
  cursor: pointer
  font-weight: 500
  transition: background 0.2s
  &:hover
    background: #2563eb

h2
    line-height: 133%
    letter-spacing: 0px

.hero-section
    display: flex
    justify-content: space-between
    align-items: center
    text-align: center
    flex-direction: column
    @media (min-width: 768px)
        text-align: left
        flex-direction: row-reverse
    img
        height: 450px
        width: 250px
        @media (min-width: 768px)
            width: unset
            height: unset

    .hero-text
        display: flex
        flex-direction: column
        align-items: center
        @media (min-width: 768px)
            width: 365px
        h1
            font-size: 27px
            @media (min-width: 768px)
                font-size: 42px

        p
            font-size: 18px
.token-liquidity-section
    text-align: center
    max-width: 550px
    @media (min-width: 768px)
        align-self: end
        text-align: right
    p
        text-align: left
        @media (min-width: 768px)
            text-align: unset
    h2
        font-weight: 700
        letter-spacing: 0.25px
        font-size: 24px
        @media (min-width: 768px)
            font-size: 27px

.challenge-section
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    @media (min-width: 768px)
        flex-direction: row-reverse
    img
        height: 255px
        width: 255px
        @media (min-width: 768px)
            width: unset
            height: unset

    .challenge-section-body
        max-width: 480px
        text-align: center
        @media (min-width: 768px)
            text-align: unset
            text-align: left

        h2
            font-size: 24px
            @media (min-width: 768px)
                font-size: 27px

        p
            font-size: 18px
            text-align: left
            @media (min-width: 768px)
                text-align: unset
</style>
