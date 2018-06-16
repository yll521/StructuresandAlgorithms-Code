/** 
 * 哈希表与哈希函数
 * 
 * 哈希函数：SHA-1 MD5
 * 
 * 性质：
 *  1.输入域无穷大，输出域相对有限
 *  2.哈希无随机性，相同输入一定对应相同输出
 *  3. 不同输入得到了相同输入===》即产生了碰撞
 *  4.离散性，均匀性
 *      均匀性越好，离散性越好，则hash函数越优良
 * 
 * 解决冲突的方式：
 *  1.开链法
 *      分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。
 *      它是解决冲突的 最简单的方法，但是它在HashTable实例之外还需要额外的存储空间
 *  2.线性探查
 *      当想向表中某个位置加人一个新元素的时候，
 *          如果索引 为index的位置已经被占据了，就尝试index+1的位置。
 *      如果index+1的位置也被占据了，就尝试 index+2的位置，以此类推
 */