-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: wishitdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customerid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `userid` bigint DEFAULT NULL,
  PRIMARY KEY (`customerid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,727494600899,'Bomble Hanuman Chwok','1997-05-16 00:00:00.000000',413306,1),(2,789654123654,'skn  wadgoan pune','2022-09-18 06:30:00.000000',413306,4),(3,236654123654,'skn  talegoan pune','2021-09-11 06:30:00.000000',413306,3),(4,987654123654,'shinde vasati solapur','2019-10-24 06:30:00.000000',413306,5),(5,321654123654,'bile wadi pimpri','2013-11-28 06:30:00.000000',413306,2),(6,123456987456,'patil vasati sangola','2015-11-18 05:30:00.000000',413306,2),(7,656565656564,'Bomble Hanuman Chwok','2022-09-08 00:00:00.000000',413306,12);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (27);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderid` bigint NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `orderdate` datetime(6) NOT NULL,
  `rating` int DEFAULT NULL,
  `servicetypeid` int NOT NULL,
  `status` varchar(16) NOT NULL,
  `supplierid` bigint NOT NULL,
  `customerid_customerid` bigint DEFAULT NULL,
  PRIMARY KEY (`orderid`),
  KEY `FK31hs3srhoendpjjggn9pry89p` (`customerid_customerid`),
  CONSTRAINT `FK31hs3srhoendpjjggn9pry89p` FOREIGN KEY (`customerid_customerid`) REFERENCES `customers` (`customerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'i have problem in my sink','-','1990-11-28 06:30:00.000000',0,3,'Pending',6,1),(2,'i have problem in my in table','-','1990-11-28 06:30:00.000000',0,3,'Cancelled',6,1),(3,'i have problem in my garaden','-','1990-11-28 06:30:00.000000',0,3,'Pending',6,1),(4,'i have problem in my mixer','-','1990-11-28 06:30:00.000000',0,3,'Pending',6,1),(5,'i have problem in my floaring','-','1990-11-28 06:30:00.000000',0,3,'Completed',6,1),(6,'i have problem in my solar','-','2022-11-28 06:30:00.000000',0,3,'Completed',6,1),(7,'i have problem in my water tank','-','2022-11-28 06:30:00.000000',0,3,'New',6,1),(8,'i have problem in my interior','-','2022-11-28 06:30:00.000000',0,3,'Completed',6,1),(9,'i have problem in my print','-','1990-11-28 06:30:00.000000',0,3,'New',6,1),(10,'i have problem in my sink','-','1990-11-28 06:30:00.000000',0,3,'Pending',6,1),(11,'i have problem in my in table','-','1990-11-28 06:30:00.000000',0,3,'Completed',6,1),(12,'i have problem in my garaden','-','1990-11-28 06:30:00.000000',0,3,'New',6,1),(13,'i have problem in my mixer','-','1990-11-28 06:30:00.000000',0,3,'Completed',6,1),(14,'i have problem in garadan','-','1990-11-28 06:30:00.000000',0,3,'Pending',6,1),(15,'i have problem in hotel','-','2022-11-28 06:30:00.000000',0,3,'New',6,1),(18,'Home Lighiting','-','2022-03-16 00:00:00.000000',0,3,'Pending',6,1),(19,'Want to repair my tiles','-','2022-09-27 00:00:00.000000',0,3,'Pending',6,1),(20,'want to make a table','-','2022-09-27 00:00:00.000000',0,3,'Cancelled',6,1),(23,'asefhtdgjfr','-','2022-09-14 00:00:00.000000',0,3,'Cancelled',6,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_h4rqgjwnqidx6mvj4i22dxwxe` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (2,' Building Maintenance'),(3,' Electrician'),(4,' Fabrication'),(6,' Furniture'),(8,' Interior Design'),(9,' Kitchen Appliance Repair'),(1,' Painting'),(11,'AC/TV Repair'),(5,'Flooring'),(7,'Gardening'),(10,'Laptop/Desktop Repair'),(12,'Pest Control'),(13,'Plumbing'),(14,'Security System'),(15,'Solar Installation'),(16,'Water Tank Cleaning'),(17,'Waterproofing');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `supplierid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint NOT NULL,
  `address` varchar(255) NOT NULL,
  `charge` int NOT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int NOT NULL,
  `userid` bigint NOT NULL,
  `service_type_id` int DEFAULT NULL,
  PRIMARY KEY (`supplierid`),
  UNIQUE KEY `UK_s4abo6ux5cx4k8hssujcu0i5r` (`userid`),
  KEY `FKljrl03xirikqyo7wq4sgdqdph` (`service_type_id`),
  CONSTRAINT `FKljrl03xirikqyo7wq4sgdqdph` FOREIGN KEY (`service_type_id`) REFERENCES `services` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (6,124544545478,'gandhi chowk',800,'1963-11-28 06:30:00.000000',413307,6,3),(7,478514545453,'patil chowk',200,'1990-11-28 06:30:00.000000',413307,7,3),(8,485174545783,'talegoan chowk',300,'1970-11-28 06:30:00.000000',413307,8,3),(9,852364545623,'pranit chowk',500,'1995-11-28 06:30:00.000000',413306,9,3),(10,963254545475,'yashoda colony',600,'1999-11-28 06:30:00.000000',413306,10,3),(11,1478545454784,'chakan vasati',200,'1989-11-28 06:30:00.000000',413306,12,3),(12,124544545478,'gandhi chowk',800,'1963-11-28 06:30:00.000000',413306,11,6),(13,478514545453,'patil chowk',200,'1990-11-28 06:30:00.000000',413306,13,3),(14,485174545783,'talegoan chowk',300,'1970-11-28 06:30:00.000000',413306,14,3),(15,852364545623,'pranit chowk',500,'1995-11-28 06:30:00.000000',413307,15,3),(16,963254545475,'yashoda colony',600,'1999-11-28 06:30:00.000000',413306,16,8),(17,1478545454784,'chakan vasati',200,'1989-11-28 06:30:00.000000',413306,17,9),(18,124544545478,'gandhi chowk',800,'1963-11-28 06:30:00.000000',413306,18,3),(19,478514545453,'patil chowk',200,'1990-11-28 06:30:00.000000',413306,19,10),(20,485174545783,'talegoan chowk',300,'1970-11-28 06:30:00.000000',413306,20,10),(21,852364545623,'pranit chowk',500,'1995-11-28 06:30:00.000000',413306,21,10),(22,963254545475,'yashoda colony',600,'1999-11-28 06:30:00.000000',413306,22,11),(23,1478545454784,'chakan vasati',200,'1989-11-28 06:30:00.000000',413306,23,11),(24,124544545478,'gandhi chowk',800,'1963-11-28 06:30:00.000000',413306,24,12),(25,478514545453,'patil chowk',200,'1990-11-28 06:30:00.000000',413306,25,13);
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `is_account_non_expired` bit(1) NOT NULL,
  `is_account_non_locked` bit(1) NOT NULL,
  `is_credentials_non_expired` bit(1) NOT NULL,
  `is_enabled` bit(1) NOT NULL,
  `mobile` varchar(16) NOT NULL,
  `name` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(16) NOT NULL,
  `username` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_63cf888pmqtt5tipcne79xsbm` (`mobile`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '',_binary '',_binary '',_binary '','9309716565','vikas','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_CUSTOMER','prashantdarade1697@gmail.com'),(2,_binary '',_binary '',_binary '',_binary '','860040546','prashat','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_CUSTOMER','patilvikas7777@gmail.com'),(3,_binary '',_binary '',_binary '',_binary '','8600444442','kunal','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_CUSTOMER','rahulpatil7777@gmail.com'),(4,_binary '',_binary '',_binary '',_binary '','9999444442','mayuri','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_CUSTOMER','mayuripatil7777@gmail.com'),(5,_binary '',_binary '',_binary '',_binary '','9999447742','kajal','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_ADMIN','kajalpatil007@gmail.com'),(6,_binary '',_binary '',_binary '',_binary '','9999487742','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashantdaradewpt@gmail.com'),(7,_binary '',_binary '',_binary '',_binary '','9999487412','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','shybhavpatil007@gmail.com'),(8,_binary '',_binary '',_binary '',_binary '','9999487841','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','royaltpatil007@gmail.com'),(9,_binary '',_binary '',_binary '',_binary '','9999483214','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','kunalpatil007@gmail.com'),(10,_binary '',_binary '',_binary '',_binary '','9999481236','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','vivekpatil007@gmail.com'),(11,_binary '',_binary '',_binary '',_binary '','9999486565','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','yuvipatil007@gmail.com'),(12,_binary '',_binary '',_binary '',_binary '','9999486363','Kishor Darade','$2a$10$ewkWdBHtLpyIqFhd3QuR5e3iru7oqajkEy9lDtBWm5DEi.3k.FTDO','ROLE_ADMIN','kishor@gmail.com'),(13,_binary '',_binary '',_binary '',_binary '','9999487878','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','motyapatil007@gmail.com'),(14,_binary '',_binary '',_binary '',_binary '','9999481141','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradejava@gmail.com'),(15,_binary '',_binary '',_binary '',_binary '','9979486363','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdarad@gmail.com'),(16,_binary '',_binary '',_binary '',_binary '','9689481111','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradeos@gmail.com'),(17,_binary '',_binary '',_binary '',_binary '','8889481141','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradesdm@gmail.com'),(18,_binary '',_binary '',_binary '',_binary '','9639486363','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradedn@gmail.com'),(19,_binary '',_binary '',_binary '',_binary '','3579481111','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradeds@gmail.com'),(20,_binary '',_binary '',_binary '',_binary '','9579481111','pranit','$2a$10$hd5/fdCn9l.y/1A5fQC/IODgQtgrxO1.aW8iPB2OX0lDqklCx1aCW','ROLE_SUPPLIER','prashatdaradednm@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verification_token`
--

DROP TABLE IF EXISTS `verification_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verification_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `otp` int NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3asw9wnv76uxu3kr1ekq4i1ld` (`user_id`),
  CONSTRAINT `FK3asw9wnv76uxu3kr1ekq4i1ld` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification_token`
--

LOCK TABLES `verification_token` WRITE;
/*!40000 ALTER TABLE `verification_token` DISABLE KEYS */;
INSERT INTO `verification_token` VALUES (2,0,NULL);
/*!40000 ALTER TABLE `verification_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-29 11:18:08
