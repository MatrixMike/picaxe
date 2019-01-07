do
	high B.1	; switch on output B.1
	pause 1000	; wait 1 second
	low B.1		; switch off output B.1
	pause 1000	; wait 1 second
loop			; loop back to start
