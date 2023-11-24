input_file = open('input.txt')
text = input_file.read()
total_symbols = list()
symbol_is_in_list = False
for symbol in text:
    if len(total_symbols) > 0:
        for check_symbol in total_symbols:
            if check_symbol[0] == symbol:
                check_symbol[1] += 1
                symbol_is_in_list = True
                break
        if not symbol_is_in_list:
             total_symbols.append([symbol, 1])
        symbol_is_in_list = False
    else:
        total_symbols.append([symbol, 1])
        
total_symbols.sort(key = lambda x: x[0])

def maxCount():
    max_count_symbol = 0
    for i in total_symbols:
        if max_count_symbol < i[1]:
            max_count_symbol = i[1]
    return max_count_symbol

max_count_value = maxCount()

a = []
for i in range(max_count_value + 1):
    a.append(list([' ' for j in range(len(total_symbols))]))
j = 0
while j < len(total_symbols):
    a[max_count_value][j] = total_symbols[j][0]
    k = max_count_value - 1
    o = 0
    while o < total_symbols[j][1]:
        a[k][j] = '#'
        k -= 1
        o += 1
    j += 1

for i in a:
    print(i)
