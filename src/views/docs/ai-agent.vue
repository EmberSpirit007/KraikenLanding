<template>
    <div>
        <h1>AI Agent</h1>
        <p>KrAIken is not just another LLM that suggests on-chain actions requiring admin or owner approval. Instead, KrAIken operates independently within its own on-chain execution environment, making decisions based on open data and a self-improving algorithm. No admin or owner can veto or interfere with its actions.</p>
        <p>
          In the chapter <strong>Liquidity Management</strong>, we described the static behavior of the contract, outlining how the liquidity manager maintains predefined parameters for market interactions. While effective in stable conditions, this static behavior lacks adaptability to dynamic market changes. Passive liquidity providers, acting as buyers of last resort, are inherently exposed to impermanent loss, as they bear the risk of price fluctuations during their provision of liquidity. By introducing an AI agent into the system, the previously static contract is now enabled to dynamically adjust to market conditions, optimizing its liquidity management strategy in real-time.
        </p>

        <p>
          The AI agent not only relies on its training to optimize the pool but also incorporates real-time data directly sourced from stakers. Parameters such as the percentage staked and average tax rate provide valuable sentiment indicators that would otherwise only be available through off-chain analysis, enriching the agent’s decision-making capabilities with actionable insights from on-chain activity.
        </p>

        <h2>Inputs to the AI Agent</h2>
        <p>
          The AI agent interacts with its environment by consuming key input parameters that capture the state of the market, user behavior, and the system itself. These inputs are normalized and structured to enable efficient decision-making by the agent.
        </p>
        <ol>
          <li>
            <strong>Price Position Relative to Range:</strong>
            <ul>
              <li><em>Description:</em> The normalized position of the current token price within a predefined range (e.g., VWAP ± volatility bounds).</li>
              <li><em>Range:</em> 0 (lower bound) to 1e18 (upper bound).</li>
            </ul>
          </li>
          <li>
            <strong>Volatility Ratio:</strong>
            <ul>
              <li><em>Description:</em> The ratio of current price volatility to a baseline, such as weekly historical volatility.</li>
              <li><em>Range:</em> 0 (low volatility) to 1e18 (high volatility relative to baseline).</li>
            </ul>
          </li>
          <li>
            <strong>Volume-to-Liquidity Ratio:</strong>
            <ul>
              <li><em>Description:</em> The ratio of trading volume to liquidity in the relevant range, indicating potential profitability.</li>
              <li><em>Range:</em> 0 (low volume relative to liquidity) to 1e18 (high volume relative to liquidity).</li>
            </ul>
          </li>
          <li>
            <strong>Time Since Last Call:</strong>
            <ul>
              <li><em>Description:</em> The elapsed time since the last AI agent update, expressed as a fraction of a predefined target interval.</li>
              <li><em>Range:</em> 0 (just called) to 1e18 (maximum target interval elapsed).</li>
            </ul>
          </li>
          <li>
            <strong>Percentage Staked:</strong>
            <ul>
              <li><em>Description:</em> The proportion of available staking slots currently utilized by users.</li>
              <li><em>Range:</em> 0 (no stake) to 1e18 (maximum stake capacity utilized).</li>
            </ul>
          </li>
          <li>
            <strong>Average Tax Rate:</strong>
            <ul>
              <li><em>Description:</em> The average tax rate applied to transactions, representing the system’s cost structure.</li>
              <li><em>Range:</em> 0 (0% tax) to 1e18 (4700% tax, maximum rate).</li>
            </ul>
          </li>
        </ol>

    <h2>Outputs from the AI Agent</h2>
    <p>The AI agent optimizes specific liquidity management parameters based on its input data, dynamically adjusting them to improve market responsiveness and profitability. These outputs are sent to the liquidity manager contract for execution.</p>
    <ol>
        <li><strong>Capital Inefficiency:</strong>
            <ul>
                <li><strong>Description:</strong> Measures the deviation from optimal capital allocation, indicating potential areas for improvement in resource utilization.</li>
                <li><strong>Type:</strong> <code>uint256</code></li>
            </ul>
        </li>
        <li><strong>Anchor Share:</strong>
            <ul>
                <li><strong>Description:</strong> Represents the proportion of resources allocated to the anchor position, reflecting the agent's confidence in the current market stability.</li>
                <li><strong>Type:</strong> <code>uint256</code></li>
            </ul>
        </li>
        <li><strong>Anchor Width:</strong>
            <ul>
                <li><strong>Description:</strong> Defines the range or bandwidth of the anchor position, determining the scope of market conditions under consideration.</li>
                <li><strong>Type:</strong> <code>uint24</code></li>
            </ul>
        </li>
        <li><strong>Discovery Depth:</strong>
            <ul>
                <li><strong>Description:</strong> Indicates the extent to which the agent explores new strategies or market opportunities beyond the established anchor parameters.</li>
                <li><strong>Type:</strong> <code>uint256</code></li>
            </ul>
        </li>
        </ol>

        <h2>Agent Contract</h2>
        <p>
          The Agent Contract serves as the execution layer for the AI agent, interfacing directly with the liquidity manager contract. It is invoked periodically by the liquidity manager to collect input data, run the genetic algorithm, and return actionable outputs for liquidity adjustments. The Agent Contract performs the following key functions:
        </p>
        <ol>
          <li>
            <strong>Input Collection and Preprocessing:</strong>
            <ul>
              <li>The contract gathers all necessary data points, such as price position, volatility ratio, volume-to-liquidity ratio, percentage staked, and average tax rate.</li>
              <li>These inputs are normalized and placed onto the stack of the Push3 Virtual Machine (VM) for efficient computation.</li>
            </ul>
          </li>
          <li>
            <strong>Algorithm Loading:</strong>
            <ul>
              <li>The genetic algorithm, stored within the contract’s state, is loaded and also placed onto the stack of the Push3 VM.</li>
              <li>This setup initializes the VM for execution.</li>
            </ul>
          </li>
          <li>
            <strong>Execution and Output Retrieval:</strong>
            <ul>
              <li>The Push3 VM executes the genetic algorithm using the input parameters on the stack.</li>
              <li>The execution results in a set of outputs, which may include adjustments to liquidity parameters or a non-action signal indicating no immediate changes are necessary.</li>
            </ul>
          </li>
          <li>
            <strong>Forwarding Outputs to Liquidity Manager:</strong>
            <ul>
              <li>The outputs are forwarded to the liquidity manager contract, which applies the recommended changes to reposition liquidity if necessary.</li>
            </ul>
          </li>
        </ol>

        <p>
          By introducing the Agent Contract, the previously static liquidity manager becomes capable of real-time optimization, driven by on-chain evolutionary computation. If you want to know how genetic algorithms work, or why the system is considered an agent, read this <a href="https://github.com/Sovraigns/SoLUSH-3/blob/main/vision.md">vision document</a>.
        </p>

        <h2>Dynamic Adaptation Through AI</h2>
        <p>
          The AI agent’s ability to dynamically adapt parameters allows the liquidity manager to respond to market volatility, trading volume, and user behavior in real-time. For example:
        </p>
        <ul>
          <li>
            <strong>Volatile Markets:</strong> The agent can widen Anchor and Discovery spacing to reduce exposure and maintain stability.
          </li>
          <li>
            <strong>High Volume:</strong> The agent can increase liquidity in Discovery to capture more trading fees.
          </li>
          <li>
            <strong>User Engagement:</strong> High staking utilization might lead the agent to prioritize profitability over conservatism.
          </li>
        </ul>

        <p>
          By replacing static configurations with adaptive intelligence, the liquidity manager evolves into a dynamic system capable of optimizing for diverse and changing conditions. This integration enables a more resilient and efficient approach to decentralized liquidity management, where the AI agent collaborates with stakers to form a cybernetic system. Staking signals, such as the percentage staked and the average tax rate, provide critical real-time sentiment data that the agent uses to refine its decisions and adapt dynamically to market behaviors.
        </p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const emit = defineEmits(["onmounted"])
onMounted(() => {
    emit("onmounted")
})
</script>
