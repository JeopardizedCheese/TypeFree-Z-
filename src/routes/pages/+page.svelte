<script>
    import { onMount, onDestroy } from "svelte";

    // Sample text for typing practice
    const SAMPLE_TEXTS = "i love head of itcamp web branch so much and btw if you met P from itcamp from rayongwit he is very cool by the way and p'moodeng is very handsome fr";

    // Text state
    const texts = SAMPLE_TEXTS.toLowerCase().split(" ");
    let pointer = 0;
    let input = "";
    let inputRef;
    let incorrectChar = false;
    let caretPosition = 0;
    let mistakes = 0;

    // Timer and WPM state
    let startTime = null;
    let endTime = null;
    let wpm = 0;
    const fixedTimer = 30; // Fixed 30 second timer
    let timeLeft = null;
    let isActive = false;
    let timerInterval;
    let wpmInterval;

    // Frozen word feature
    let frozenWordIndex = Math.floor(Math.random() * (texts.length - 3)) + 2;
    let isFrozen = false;
    let spacebarPresses = 0;

    // Pointer status constants
    const pointerStatus = {
        stay: "stay", // Current word
        leave: "leave", // Already typed words
        unvisited: "unvisited", // Words not reached yet
        incorrect: "incorrect", // Incorrectly typed character
    };

    // Get styling based on pointer status
    const getPointerStyle = (status) => {
        if (status === "frozen")
            return "text-blue-200 underline underline-offset-2 decoration-blue-400 bg-blue-900/50 px-1 blur-[0.3px] animate-pulse";
        if (status === pointerStatus.stay)
            return "text-slate-300 underline underline-offset-2 decoration-[#6DE1D2]";
        if (status === pointerStatus.leave) return "text-[#9EC6F3]";
        if (status === pointerStatus.incorrect) return "text-red-500";
        return "text-slate-500";
    };

    // Start the game
    const startGame = () => {
        pointer = 0;
        input = "";
        mistakes = 0;
        startTime = Date.now();
        endTime = null;
        timeLeft = fixedTimer;
        isActive = true;
        incorrectChar = false;
        isFrozen = false;
        spacebarPresses = 0;

        // Start the timer
        timerInterval = setInterval(() => {
            if (timeLeft <= 1) {
                finishGame();
            } else {
                timeLeft--;
            }
        }, 1000);

        // Calculate WPM every second
        wpmInterval = setInterval(() => {
            const elapsedMinutes = (Date.now() - startTime) / 60000;
            const wordsTyped = pointer;
            wpm = Math.round(wordsTyped / elapsedMinutes);
        }, 1000);

        if (inputRef) {
            inputRef.focus();
        }
    };

    // Finish the game
    const finishGame = () => {
        isActive = false;
        endTime = Date.now();
        clearInterval(timerInterval);
        clearInterval(wpmInterval);
    };

    // Reset or retry the game
    const resetGame = () => {
        pointer = 0;
        input = "";
        startTime = null;
        endTime = null;
        wpm = 0;
        timeLeft = null;
        isActive = false;
        mistakes = 0;
        incorrectChar = false;
        isFrozen = false;
        spacebarPresses = 0;
        frozenWordIndex = Math.floor(Math.random() * (texts.length - 3)) + 2; // New random frozen word
        if (inputRef) {
            inputRef.focus();
        }
    };

    // Handle keydown for space bar freezing effect
    function handleKeydown(event) {
        
        console.log(isFrozen);

        if (isActive && isFrozen && event.key === " ") {
            event.preventDefault();
            spacebarPresses++;

            if (spacebarPresses >= 20) {
                isFrozen = false;
                spacebarPresses = 0;
                input = "";
                pointer += 1
            }
        }
    }

    // Check typing input
    $: {
        if (input && isActive) {
            const currentWord = texts[pointer];

            // Check if we've reached the frozen word
            if (pointer === frozenWordIndex && !isFrozen) {
                isFrozen = true;
            }

            // If frozen, don't process input normally
            if (isFrozen) {
                // Can't use return here for some reason
                input = "";
                //return
            }

            // Check if the input is incorrect
            if (input.length <= currentWord.length) {
                const subWord = currentWord.substring(0, input.length);
                incorrectChar = subWord !== input;
            } else {
                incorrectChar = true;
            }

            // If space is pressed and we have input, check the word
            if (input.endsWith(" ") && input.trim().length > 0) {
                const trimmedInput = input.trim();

                // If input matches current word, move to next word
                if (trimmedInput === currentWord) {
                    pointer += 1; //just skip it tbh I dont wanna deal with this
                    input = "";
                    incorrectChar = false;

                    // If we've reached the end of the text
                    if (pointer >= texts.length) {
                        finishGame();
                    }
                } else {
                    // Remove the space but count as a mistake
                    input = input.slice(0, -1);
                    mistakes += 1;
                }
            }
        }
    }

    // Focus input on mount and handle cleanup
    onMount(() => {
        if (inputRef) {
            inputRef.focus();
        }

        // Handle keyboard focus
        const handleFocus = () => {
            if (inputRef) {
                inputRef.focus();
            }
        };

        window.addEventListener("click", handleFocus);

        return () => {
            window.removeEventListener("click", handleFocus);
        };
    });

    onDestroy(() => {
        if (timerInterval) clearInterval(timerInterval);
        if (wpmInterval) clearInterval(wpmInterval);
    });

    // Calculate styled character elements for the current word
    const getWordCharacters = (word, wordIndex) => {
        const isCurrentWord = pointer === wordIndex;
        const chars = [...word];

        return chars
            .map((char, charIndex) => {
                let charClass = "";

                if (isCurrentWord) {
                    if (charIndex === input.length) {
                        // Caret position (next character to type)
                        charClass = "text-[#6DE1D2] animate-pulse relative";
                    } else if (charIndex < input.length) {
                        // Already typed characters
                        if (input[charIndex] === char) {
                            charClass = "text-white";
                        } else {
                            // Incorrectly typed character
                            charClass = "text-red-500";
                        }
                    }
                }

                return `<span class="${charClass}" data-index="${charIndex}">${char}${isCurrentWord && charIndex === input.length ? '<span class="absolute -bottom-0.5 h-5 w-0.5 bg-[#6DE1D2] animate-blink"></span>' : ""}</span>`;
            })
            .join("");
    };

    // Get the current word status
    const getWordStatus = (wordIndex) => {
        if (pointer === wordIndex) {
            if (isFrozen && wordIndex === frozenWordIndex) return "frozen";
            return pointerStatus.stay;
        }
        if (pointer > wordIndex) return pointerStatus.leave;
        return pointerStatus.unvisited;
    };

</script>

<div
    class="flex flex-col justify-center items-center min-h-screen px-4 sm:px-[10vw] lg:px-[20vw] w-full bg-[rgb(37, 150, 190)] text-[#7A73D1] font-mono"
>
    <!-- Header with WPM and Timer -->
    <div
        class="w-full max-w-3xl mb-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
        <a href="/" class="p-2.5 bg-blue-950 mt-7 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out hover:bg-blue-400 hover: text-cyan-50 hover:scale-105">Go back if you're a loser 🤣</a>
        <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-[#6DE1D2]">TypeFree(Z)🧊(30s)</h1>
            <h2 class="text-2xl font-bold text-[#6DE1D2]">Will you escape the cold?🥶</h2>
            {#if isActive || endTime}
                <div class="text-xl">
                    <span class="text-white">WPM: </span>
                    <span class="text-[#6DE1D2] font-bold">{wpm}</span>
                    {#if mistakes > 0}
                        <span class="text-white ml-4">Mistakes: </span>
                        <span class="text-red-400 font-bold">{mistakes}</span>
                    {/if}
                </div>
            {/if}
        </div>

        <div class="flex flex-col items-center">
            {#if isActive}
                <div class="text-xl">
                    <span class="text-white">Time left: </span>
                    <span
                        class={timeLeft <= 10
                            ? "text-red-400 font-bold"
                            : "text-[#6DE1D2] font-bold"}>{timeLeft}s</span
                    >
                </div>
            {/if}

            {#if isFrozen}
                <div class="mt-2 text-blue-300 animate-pulse font-bold">
                    Muhaha! You Fool! Word Frozen! Press space {20 - spacebarPresses} more times to
                    unfreeze
                </div>
                <img src="./main.webp" alt="" srcset="">
            {/if}
        </div>
    </div>

    <!-- Text Display Area -->
    <div
        class="w-full max-w-3xl flex flex-wrap gap-x-2 mb-6 text-xl sm:text-2xl justify-center sm:justify-start"
    >
        {#each texts as word, index}
            <div class="relative inline-flex">
                <p
                    class="{getPointerStyle(
                        getWordStatus(index),
                    )} inline-flex relative"
                >
                    {@html getWordCharacters(word, index)}
                </p>
            </div>
        {/each}
    </div>

    <!-- Input Area -->
    <div class="w-full max-w-3xl relative mb-6">
        <input
            bind:this={inputRef}
            type="text"
            bind:value={input}
            on:input={() => {
                if (!isActive && !endTime) {
                    startGame();
                }
            }}
            on:keydown={handleKeydown}
            disabled={endTime !== null}
            class="w-full py-2 px-4 rounded-md bg-[rgba(247, 240, 240, 0.24)] shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] backdrop-blur-[2px] text-white border-2 {incorrectChar
                ? 'border-red-500'
                : isFrozen
                  ? 'border-blue-400 animate-spin'
                  : 'border-transparent focus:border-[#6DE1D2]'} outline-none"
            placeholder={isFrozen
                ? "PRESS SPACE 20 TIMES TO UNFREEZE!"
                : "Start typing here..."}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
        />
    </div>

    <!-- Controls -->
    <div class="flex gap-4">
        {#if !isActive && !endTime}
            <button
                on:click={startGame}
                class="px-6 py-2 bg-[#6DE1D2] text-blue-950 font-bold rounded-md hover:bg-[#5bc7ba] transition-colors"
            >
                Start
            </button>
        {:else}
            <button
                on:click={resetGame}
                class="px-6 py-2 bg-[#6DE1D2] text-blue-950 font-bold rounded-md hover:bg-[#5bc7ba] transition-colors"
            >
                Retry
            </button>
        {/if}
    </div>

    <!-- Results Display -->
    {#if endTime}
        <div class="mt-8 p-6 bg-blue-900 rounded-lg text-center">
            <h2 class="text-2xl font-bold text-[#6DE1D2] mb-2">Results</h2>
            <p class="text-xl text-white">
                Words Typed: <span class="text-[#6DE1D2] font-bold"
                    >{pointer}</span
                >
            </p>
            <p class="text-xl text-white">
                WPM: <span class="text-[#6DE1D2] font-bold">{wpm}</span>
            </p>
            <p class="text-xl text-white">
                Mistakes: <span class="text-red-400 font-bold">{mistakes}</span>
            </p>
            <p class="text-xl text-white">
                Accuracy: <span class="text-[#6DE1D2] font-bold"
                    >{Math.max(
                        0,
                        Math.round(
                            100 - (mistakes / Math.max(1, pointer)) * 100,
                        ),
                    )}%</span
                >
            </p>
        </div>
    {/if}
</div>

<style>
    @keyframes blink {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    .animate-blink {
        animation: blink 1s infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 0.7;
        }
        50% {
            opacity: 1;
        }
    }

    .animate-pulse {
        animation: pulse 1.5s infinite;
    }
</style>
