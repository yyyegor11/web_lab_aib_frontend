input_file = open('input.txt')
input_text = input_file.read().split()
Count_numbers = int(input_text[0])
input_text.pop(0)
if input_text[0] == 'descending':
    input_text.pop(0)
    input_text = [int (x) for x in input_text]
    input_text.sort(reverse=True)
elif input_text[0] == 'ascending':
    input_text.pop(0)
    input_text = [int (x) for x in input_text]
    input_text.sort()

def Sequence(sum_medians, sub_sequence_length):
    b = input_text[:sub_sequence_length]
    b.sort()
    if len(b) % 2 == 1:
        if len(b) == 1:
            sum_medians += b[0]
        else:
            sum_medians +=  b[((len(b) + 1) // 2) - 1]
    elif len(b) % 2 == 0:
        sum_medians += b[(len(b) // 2) - 1]
    sub_sequence_length += 1
    if sub_sequence_length > Count_numbers:
        return sum_medians
    else:
        return Sequence(sum_medians, sub_sequence_length)

output_file = open('output.txt', 'w')
output_file.write(str(Sequence(0,1)))
